import { persistentReducer } from 'redux-pouchdb-plus';
import { ADD_REPETITION, DELETE_REPETITION } from './../actiontypes';
import reject from 'lodash/reject';

const repetitions = (state = [], action) => {
  switch (action.type) {
    case ADD_REPETITION:
      return [...state, { id: action.id, createdAt: action.createdAt }];
    case DELETE_REPETITION:
      const NEW_STATE = reject(state, { id: action.id });
      return NEW_STATE;
    default:
      return state;
  }
};

export default persistentReducer(repetitions);
