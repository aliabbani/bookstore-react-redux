import { Route, Switch } from 'react-router-dom';
import BooksList from './BooksList';
import InputBook from './InputBook';
import Categories from '../pages/Categories';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

function BookContainer() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>
            <BooksList />
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
}

export default BookContainer;
