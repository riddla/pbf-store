import { persistentReducer } from 'redux-pouchdb-plus';

const ANCHOR_GROUP_ID = 'anchor';
const DECOMPRESS_GROUP_ID = 'decompress';

const DEFAULT_STATE = [
  {
    id: 'founder',
    title: 'Founder',
    group: ANCHOR_GROUP_ID
  },
  {
    id: 'standing_decompression',
    title: 'Standing Decompression',
    group: DECOMPRESS_GROUP_ID
  }
];

const exercises = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default persistentReducer(exercises);
