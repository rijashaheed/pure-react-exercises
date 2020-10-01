import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const CommitMessage = ({ commit }) => (
    <span>{commit.message}</span>
  );
  
  CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired,
  };

export default CommitMessage;