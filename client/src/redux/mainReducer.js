import { combineReducers } from 'redux';

import userReducer from './reducers/user/reduces';

export default combineReducers({
  user: userReducer,
});
