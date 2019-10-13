import { combineReducers } from 'redux';
import remindersReducer from './remindersReducer';
import dateReducer from './dateReducer';

export default combineReducers({
  remindersReducer,
  dateReducer,
});
