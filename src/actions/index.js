import { ADD_REPETITION } from './../actiontypes';

export const addRepetition = (id, createdAt) => ({
  type: ADD_REPETITION,
  id,
  createdAt
});
