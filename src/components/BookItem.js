/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => (
  <div>
    <span>
      <li>
        {props.book.title}
        {' '}
        <br />
        {props.book.author}
        {' '}
        <br />
        <button type="button" onClick={() => props.deleteBookProps(props.book.id)}>
          Delete
        </button>
      </li>
    </span>
  </div>
);

BookItem.propTypes = {
  deleteBookProps: PropTypes.func.isRequired,
};

export default BookItem;
