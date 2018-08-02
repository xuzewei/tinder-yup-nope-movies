import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

// const middlewares = [thunk, createLogger(), promiseMiddleware()];
const middlewares = [thunk, promiseMiddleware()];

const enhancers = compose(
  autoRehydrate({ log: false }),
  applyMiddleware(...middlewares),
);

const store = createStore(reducers, undefined, enhancers);

export default store;
