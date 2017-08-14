import repetitions from './repetitions';

const DUMMY_ID = 'repetion_founder_1';
const DUMMY_CREATION_DATETIME = new Date().toISOString();
const EXISTING_REPETITION = {
  id: DUMMY_ID,
  exercise: 'founder',
  createdAt: DUMMY_CREATION_DATETIME
};
const EXISTING_REPETITION_2 = {
  id: 'repetition_founder_2',
  exercise: 'founder',
  createdAt: DUMMY_CREATION_DATETIME
};

describe('repetitions reducer', () => {
  it('should handle initial state', () => {
    expect(repetitions(undefined, {})).toEqual([]);
  });

  it('should handle ADD_REPETITION', () => {
    expect(
      repetitions([], {
        type: 'ADD_REPETITION',
        id: DUMMY_ID,
        createdAt: DUMMY_CREATION_DATETIME
      })
    ).toEqual([
      {
        id: DUMMY_ID,
        createdAt: DUMMY_CREATION_DATETIME
      }
    ]);

    expect(
      repetitions([EXISTING_REPETITION], {
        type: 'ADD_REPETITION',
        id: DUMMY_ID,
        createdAt: DUMMY_CREATION_DATETIME
      })
    ).toEqual([
      EXISTING_REPETITION,
      {
        id: DUMMY_ID,
        createdAt: DUMMY_CREATION_DATETIME
      }
    ]);
  });

  it('should handle DELETE_REPETITION', () => {
    expect(
      repetitions([EXISTING_REPETITION], {
        type: 'DELETE_REPETITION',
        id: DUMMY_ID
      })
    ).toEqual([]);
    expect(
      repetitions([EXISTING_REPETITION, EXISTING_REPETITION_2], {
        type: 'DELETE_REPETITION',
        id: DUMMY_ID
      })
    ).toEqual([EXISTING_REPETITION_2]);
  });
});
