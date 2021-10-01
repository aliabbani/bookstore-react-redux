import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { loaded } from '../redux/books/books';

function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaded());
  }, []);

  const books = useSelector((state) => state.books);
  return (
    <ul className="list-container">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BooksList;
