import * as actions from './index';

const DUMMY_CREATION_DATETIME = new Date().toISOString();
import { ADD_REPETITION, DELETE_REPETITION } from './../actiontypes';

describe('repititions actions', () => {
  it('addRepetition should create ADD_REPETITION action', () => {
    expect(actions.addRepetition('founder', DUMMY_CREATION_DATETIME)).toEqual({
      type: ADD_REPETITION,
      exercise: 'founder',
      id: 'repetition_founder_1',
      createdAt: DUMMY_CREATION_DATETIME
    });
  });

  it('deleteRepetition should create DELETE_REPETITION action', () => {
    expect(actions.deleteRepetition('founder')).toEqual({
      type: DELETE_REPETITION,
      id: 'founder'
    });
  });
});
