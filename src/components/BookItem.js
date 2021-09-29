import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book: { title, author, id }, deleteBookProps }) => (
  <div>
    <span>
      <li>
        {title}
        {' '}
        <br />
        {author}
        {' '}
        <br />
        <button type="button" onClick={() => deleteBookProps(id)}>
          Delete
        </button>
      </li>
    </span>
  </div>
);

BookItem.propTypes = {
  deleteBookProps: PropTypes.func.isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
