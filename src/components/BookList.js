import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      index: 1,
      title: 'natural',
      author: 'author1',
    },
    {
      index: 2,
      title: 'The 7 habits of highly effective people',
      author: 'author2',
    },
    {
      index: 1,
      title: 'Money heist',
      author: 'author3',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
