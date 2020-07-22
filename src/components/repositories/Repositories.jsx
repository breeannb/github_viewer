  
import React from 'react';
import PropTypes from 'prop-types';

const Repository = ({ repo }) => (
  <>
    <p>Repositories:</p>
    <ul>
      <li>{repo}</li>
    </ul>
  </>
);

Repository.propTypes = {
  repo: PropTypes.string.isRequired
};

export default Repository;
