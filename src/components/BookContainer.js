import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';
import BooksList from './BooksList';
import InputBook from './InputBook';
import Categories from '../pages/Categories';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

function BookContainer() {
  const [BookOri, setBookOri] = useState({
    books: [
      {
        id: uuidv4(),
        title: 'book1',
        author: 'author1',
      },
      {
        id: uuidv4(),
        title: 'book2',
        author: 'author2',
      },
      {
        id: uuidv4(),
        title: 'book3',
        author: 'author3',
      },
    ],
  });

  const delBook = (id) => {
    setBookOri({
      books: [
        ...BookOri.books.filter((book) => book.id !== id),
      ],
    });
  };

  const addBookItem = (title) => {
    const newBook = {
      id: uuidv4(),
      title,
    };
    setBookOri({
      books: [...BookOri.books, newBook],
    });
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>
            <BooksList
              books={BookOri.books}
              deleteBookProps={delBook}
            />
            <InputBook addBookProps={addBookItem} />
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
