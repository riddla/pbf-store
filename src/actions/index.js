import { ADD_REPETITION, DELETE_REPETITION } from './../actiontypes';
import uniqueId from 'lodash/uniqueId';

export const addRepetition = (exercise, createdAt) => {
  const id = uniqueId(`repetition_${exercise}_`);
  return {
    type: ADD_REPETITION,
    exercise,
    id,
    createdAt
  };
};

export const deleteRepetition = id => ({
  type: DELETE_REPETITION,
  id
});
