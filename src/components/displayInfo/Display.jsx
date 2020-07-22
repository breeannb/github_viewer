import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, followers, following, html_url, repos }) => (
  <>
  
    <p>Username: {name}</p>
    <ul>
      <li>Followers: {followers}</li>
      <li>Following: {following}</li>
      <li>
        <a href={html_url}>Profile Link</a>
      </li>
    </ul>

    <p> Repositories: </p>
    <ul>
      <li>
        {
          repos.map(repo => 
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>)
        }
      </li>
    </ul>
    
  </>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  html_url: PropTypes.string.isRequired, 
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Display;
