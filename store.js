import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'persist-root',
  storage,
};
// eslint-disable-next-line no-unused-vars
const logger = (store) => (next) => (action) => {
  console.log('dispatching', action.type);
  return next(action);
};
// eslint-disable-next-line no-unused-vars
const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, crashReporter))
);
export const persistor = persistStore(store);
export default store;
