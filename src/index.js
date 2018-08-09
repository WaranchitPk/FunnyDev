import React from 'react';
import ReactDom from 'react-dom';
import { App } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducers/rootReducers';

const store = createStore(reducer,
  applyMiddleware(thunk, promiseMiddleware()));
//
ReactDom.render(
  <Provider store={store}>
    <Router>
        <App/>
    </Router>
  </Provider>,
  document.getElementById('app'));

