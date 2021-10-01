import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
    category: '',
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

  const { title, category } = inputBook;
  return (
    <div className="input-container">
      <h2 className="input-h2">ADD NEW BOOK</h2>
      <form className="input-form">
        <input
          name="title"
          className="input-title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={onChange}
        />
        <select name="category" className="input-category" id="categories" value={category} onChange={onChange}>
          <option value="First Category">First Category</option>
          <option value="Second Category">Second Category</option>
          <option value="Third Category">Third Category</option>
          <option value="Fourth Category">Fourth Category</option>
        </select>
        <button type="button" className="input-button" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
