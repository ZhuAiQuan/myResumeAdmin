import { createStore, combineReducers } from 'redux';
import app from './reducers/app'

const reducers = combineReducers({
  app
});

const store = createStore(reducers);

export default store