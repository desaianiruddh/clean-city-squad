import { combineReducers } from 'redux';

import adminReducer from './admin';

const rootReducer = combineReducers({
  adminReducer : adminReducer,
});

export default rootReducer;