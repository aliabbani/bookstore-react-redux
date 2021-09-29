import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from './books/books';

const reducer = combineReducers({
  books,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
