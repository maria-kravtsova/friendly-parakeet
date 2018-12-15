import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from '../reducers/index';
import App from '../components/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(
    <Provider store={createStoreWithMiddleware(reducers)}><App/></Provider>, container);
});