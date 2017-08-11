import {ADD_REPETITION} from './../actiontypes'

const repetitions = (state = [], action) => {
  switch (action.type) {
    case ADD_REPETITION:
      return [
        ...state,
        {
          id: action.id,
          createdAt: action.createdAt
        }
      ]
    default:
      return state
  }
}

export default repetitions
