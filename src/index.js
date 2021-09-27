import React from 'react';
import ReactDOM from 'react-dom';
// component file
import { BrowserRouter as Router } from 'react-router-dom';
import BookContainer from './components/BookContainer';
import './components/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
