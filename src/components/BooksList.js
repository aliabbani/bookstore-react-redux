/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBookProps={props.deleteBookProps}
        />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  deleteBookProps: PropTypes.func.isRequired,
};

export default BooksList;
