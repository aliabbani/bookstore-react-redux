import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookContainer from './components/BookContainer';
import store from './redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
