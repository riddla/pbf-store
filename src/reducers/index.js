import { combineReducers } from 'redux';
import repetitions from './repetitions';
import exercises from './exercises';

const todoApp = combineReducers({
  repetitions,
  exercises
});

export default todoApp;
