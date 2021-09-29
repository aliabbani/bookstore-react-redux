import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList({ books, deleteBookProps }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBookProps={deleteBookProps}
        />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  deleteBookProps: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BooksList;
