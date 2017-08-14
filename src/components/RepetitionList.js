import React from 'react';
import PropTypes from 'prop-types';
import Repetition from './Repetition';

const RepetitionList = ({ repetitions, onRepetitionClick }) =>
  <ul>
    {repetitions.map(repetition =>
      <Repetition
        key={repetition.id}
        {...repetition}
        onClick={() => onRepetitionClick(repetition.id)}
      />
    )}
  </ul>;

RepetitionList.propTypes = {
  repetitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onRepetitionClick: PropTypes.func.isRequired
};

export default RepetitionList;
