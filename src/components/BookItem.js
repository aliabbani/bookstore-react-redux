import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({
  book: {
    title, author, category, id,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        <li>
          {title}
          {' '}
          <br />
          {author}
          {' '}
          <br />
          {category}
          {' '}
          <br />
          <button type="button" onClick={() => dispatch(removeBook(id))}>
            Delete
          </button>
        </li>
      </span>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
