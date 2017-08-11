import repetitions from './repetitions'

const TEST_ID = 'founder';
const DUMMY_CREATION_DATETIME = new Date().toISOString();
const EXISTING_REPETITION = {
  id: 'founder',
  createdAt: DUMMY_CREATION_DATETIME
};

describe('repetitions reducer', () => {
  it('should handle initial state', () => {
    expect(
      repetitions(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_REPETITION', () => {
    expect(
      repetitions([], {
        type: 'ADD_REPETITION',
        id: TEST_ID,
        createdAt: DUMMY_CREATION_DATETIME
      })
    ).toEqual([
      {
        id: TEST_ID,
        createdAt: DUMMY_CREATION_DATETIME
      }
    ])

    expect(
      repetitions([
        EXISTING_REPETITION
      ], {
          type: 'ADD_REPETITION',
          id: TEST_ID,
          createdAt: DUMMY_CREATION_DATETIME
        })
    ).toEqual([
      EXISTING_REPETITION, {
        id: TEST_ID,
        createdAt: DUMMY_CREATION_DATETIME
      }
    ])
  })

})
