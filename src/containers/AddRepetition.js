import React from 'react';
import { connect } from 'react-redux';
import { addRepetition } from '../actions';

let AddRepetition = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          const CREATION_DATETIME = new Date().toISOString();
          dispatch(addRepetition(input.value, CREATION_DATETIME));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Repetition</button>
      </form>
    </div>
  );
};
AddRepetition = connect()(AddRepetition);

export default AddRepetition;
