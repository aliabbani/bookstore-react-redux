import React from 'react';
import ReactDOM from 'react-dom';
// component file
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/books/books';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

console.log(store);
