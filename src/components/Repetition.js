import React from 'react';
import PropTypes from 'prop-types';

const Repetition = ({ onClick, createdAt, id }) =>
  <li onClick={onClick}>
    {id} | {createdAt}
  </li>;

Repetition.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default Repetition;
