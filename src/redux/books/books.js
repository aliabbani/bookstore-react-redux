const ADD_BOOK = 'bookStore/books/ADD-BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE-BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  const { id, type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);
    default:
      return state;
  }
};

export default reducer;
