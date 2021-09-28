import React from 'react';
import propTypes from 'prop-types';

const BookItem = ({
  id, title, author,
}) => (
  <li key={id}>
    <p>{title}</p>
    <p>{author}</p>
    <button type="button">remove</button>
  </li>
);

BookItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default BookItem;
