import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import anythingWeWant from './books/books';

const reducer = combineReducers({
  anythingWeWant,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
