const ADD_BOOK = 'bookStore/books/ADD-BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE-BOOK';
const GET_BOOKS = 'bookStore/books/GET-BOOK';

const initialState = [];

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const loaded = () => async (dispatch) => {
  const getFetch = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xzaMKJSlpbR7OSrLeZrh/books')
    .then((response) => response.json());
  const getFetchId = Object.keys(getFetch);
  const formated = [];
  getFetchId.map((key) => formated.push({
    id: key,
    title: getFetch[key][0].title,
    category: getFetch[key][0].category,
  }));
  dispatch(getBooks(formated));
};

export const addBook = (payload) => async (dispatch) => {
  const adding = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xzaMKJSlpbR7OSrLeZrh/books', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
  });
  if (adding) {
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const removing = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xzaMKJSlpbR7OSrLeZrh/books/${id}`, {
    method: 'Delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  if (removing) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

const reducer = (state = initialState, action) => {
  const { id, type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
