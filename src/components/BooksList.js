import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BooksList() {
  const books = useSelector((state) => state.books);
  return (
    <ul>
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
