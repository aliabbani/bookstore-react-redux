import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    {
      index: 1,
      title: 'natural',
      author: 'author1',
      categories: 'nature',
    },
    {
      index: 2,
      title: 'The 7 habits of highly effective people',
      author: 'author2',
      categories: 'business',
    },
    {
      index: 1,
      title: 'Money heist',
      author: 'author3',
      categories: 'action',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          categories={book.categories}
        />
      ))}
    </ul>
  );
};

export default BookList;
