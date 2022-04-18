import { createStore, applyMiddleware } from 'redux';
import rootReducer from './mainReducer';
import logger from 'redux-logger';

const middlewares = [logger];
const reduxStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default reduxStore;
