import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import BookList from './BookList';
import InputBook from './InputBook';

const BookContainer = () => (
  <>
    <Navbar />
    <Switch>

      <Route exact path="/">
        <div className="container">
          <BookList />
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

export default BookContainer;
