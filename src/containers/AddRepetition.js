import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRepetition } from '../actions';

let AddRepetition = ({ dispatch, exercises, onExerciseClick }) => {
  return (
    <ul>
      {exercises.map(exercise =>
        <li
          key={exercise.id}
          onClick={() => onExerciseClick(exercise.id, new Date().toISOString())}
        >
          {exercise.title}
        </li>
      )}
    </ul>
  );
};

AddRepetition.propTypes = {
  exercises: PropTypes.array.isRequired,
  onExerciseClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  exercises: state.exercises
});

const mapDispatchToProps = {
  onExerciseClick: addRepetition
};

AddRepetition = connect(mapStateToProps, mapDispatchToProps)(AddRepetition);

export default AddRepetition;
