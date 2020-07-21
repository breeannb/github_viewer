import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ userName, followerCount, followingCount, profileLink }) => (
  <ul>
    <li>Username: {userName}</li>
    <li>Followers: {followerCount}</li>
    <li>Following: {followingCount}</li>
    <li>Profile: {profileLink}</li>
  </ul>
);

Display.propTypes = {
  userName: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  profileLink: PropTypes.string.isRequired
};

export default Display;




