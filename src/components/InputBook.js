import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInputBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...inputBook,
      id: uuidv4(),
    };
    dispatch(addBook(payload));
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
        <input
          name="author"
          type="text"
          placeholder="Book author"
          value={inputBook.author}
          onChange={onChange}
        />
        <input type="text" placeholder="Category" />
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
