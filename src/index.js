import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './mock/index';
import store from './redux';
import { Provider } from 'react-redux';
import React from 'react';

/**
 * entry
 */
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
