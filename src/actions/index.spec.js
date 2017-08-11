import * as actions from './index';

const DUMMY_CREATION_DATETIME = new Date().toISOString();
import { ADD_REPETITION } from './../actiontypes';

describe('repititions actions', () => {
  it('addRepetition should create ADD_REPETITION action', () => {
    expect(actions.addRepetition('founder', DUMMY_CREATION_DATETIME)).toEqual({
      type: ADD_REPETITION,
      id: 'founder',
      createdAt: DUMMY_CREATION_DATETIME
    });
  });
});
