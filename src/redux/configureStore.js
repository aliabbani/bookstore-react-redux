import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import books from './books/books';

const reducer = combineReducers({
  books,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
