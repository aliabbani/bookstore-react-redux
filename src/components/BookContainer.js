import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const BookContainer = () => (
  <>
    <Navbar />
    <Switch>

      <Route exact path="/">
        <div className="container" />
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
