import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({
  book: {
    title, category, id,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="box">
      <div className="list-left">
        <li className="list-left-comp">{title}</li>
        <li className="list-left-comp">Author</li>
        <li className="list-left-comp">{category}</li>
        <button type="button" className="list-left-button">Comments</button>
        <button type="button" className="list-left-button-remove" onClick={() => dispatch(removeBook(id))}>
          Delete
        </button>
        <button type="button" className="list-left-button">Edit</button>
      </div>
      <div className="list-right">
        <div>
          <div>circle</div>
          <div>
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="list-right-2">
          <li className="list-right-comp">Current Chapter</li>
          <li className="list-right-comp">Chapter 17</li>
          <button type="button" className="list-right-button">Update progress</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
