import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputBook(props) {
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputBook({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBook.title.trim()) {
      props.addBookProps(inputBook.title);
      setInputBook({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          value={inputBook.title}
          onChange={onChange}
        />
        <input type="text" placeholder="Category" />
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

InputBook.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};

export default InputBook;
