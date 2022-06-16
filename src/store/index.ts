import { createStore, combineReducers } from 'redux';
import app from './reducers/app';
import user from './reducers/user'

const reducers = combineReducers({
  app,
  user
});

const store = createStore(reducers);

export default store