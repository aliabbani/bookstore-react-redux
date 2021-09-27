import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import InputBook from './InputBook';

const BookContainer = () => (
  <>
    <Navbar />
    <Switch>

      <Route exact path="/">
        <div className="container">
          <InputBook />
        </div>

      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

// const books = [
//   {
//     index: 1,
//     title: 'natural',
//     author: 'author1',
//     Categories: 'nature',
//   },
//   {
//     index: 2,
//     title: 'The 7 habits of highly effective people',
//     author: 'author2',
//     Categories: 'business',
//   },
//   {
//     index: 1,
//     title: 'Money heist',
//     author: 'author3',
//     Categories: 'action',
//   },
// ];

export default BookContainer;
