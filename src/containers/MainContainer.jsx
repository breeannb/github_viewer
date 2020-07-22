import React, { Component } from 'react';
import { getUserInfo, getRepos } from '../services/getUserInfo';
import UserInput from '../components/UserInput/UserInput';
import Display from '../components/displayInfo/Display';

export default class MainContainer extends Component {
  state = {
    gitHubProfile: '',
    name: '', 
    followers: '', 
    following: '', 
    html_url: '', 
    repos: []
  };

  handleChange = ({ target }) => {
    this.setState({ gitHubProfile: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { gitHubProfile } = this.state;
    Promise.all([
      getUserInfo(gitHubProfile),
      getRepos(gitHubProfile)
    ])
      .then(([{ name, followers, following, html_url }, repos]) => this.setState({ name, followers, following, html_url, repos }));
  }

  render() {
    const { gitHubProfile, name, followers, following, html_url, repos } = this.state;
    return (
      <div>
        <UserInput gitHubProfile={gitHubProfile} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display name={name} followers={followers} following={following} html_url={html_url} repos={repos} />
      </div>
    );
  }
}
