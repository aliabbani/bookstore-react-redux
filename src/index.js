import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BookContainer from './components/BookContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
