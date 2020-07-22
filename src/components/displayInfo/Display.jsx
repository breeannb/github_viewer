import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, followers, following, html_url }) => (
  <>
    <ul>
      <li>Username: {name}</li>
      <li>Followers: {followers}</li>
      <li>Following: {following}</li>
      <li>
        <a href={html_url}>Profile Link</a>
      </li>
    </ul>
  </>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired
};

export default Display;
