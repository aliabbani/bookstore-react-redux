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
        <li className="list-left-comp list-left-category">{category}</li>
        <li className="list-left-comp list-left-title">{title}</li>
        <li className="list-left-comp list-left-author">Author</li>
        <div className="list-left-buttons">
          <p className="list-left-button ">Comments</p>
          <button type="button" className="list-left-button-remove" onClick={() => dispatch(removeBook(id))}>
            Delete
          </button>
          <p className="list-left-button list-left-button2">Edit</p>

        </div>
      </div>
      <div className="list-right">
        <div className="list-right-1">
          <div className="oval-2" />
          <div className="oval-3">
            <p className="percentage">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="list-right-2">
          <li className="list-right-comp">Current Chapter</li>
          <li className="list-right-comp1">Chapter 17</li>
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
