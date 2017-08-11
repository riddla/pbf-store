import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb-browser';

import reducer from './reducers';
import logger from 'redux-logger';

const db = new PouchDB('pbf_repititions');

//optional
const applyMiddlewares = applyMiddleware(logger);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore({ db })
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
