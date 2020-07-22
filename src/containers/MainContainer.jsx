import React, { Component } from 'react';
import { getUserInfo } from '../services/getUserInfo';
import UserInput from '../components/UserInput/UserInput';
import Display from '../components/displayInfo/Display';

export default class MainContainer extends Component {
  state = {
    gitHubProfile: '',
    name: '', 
    followers: '', 
    following: '', 
    html_url: ''
  };

  handleChange = ({ target }) => {
    this.setState({ gitHubProfile: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { gitHubProfile } = this.state;
    Promise.all([
      getUserInfo(gitHubProfile)
    ])
      .then(([{ name, followers, following, html_url }]) => this.setState({ name, followers, following, html_url }));
  }

  render() {
    const { gitHubProfile, name, followers, following, html_url } = this.state;
    return (
      <div>
        <UserInput gitHubProfile={gitHubProfile} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display name={name} followers={followers} following={following} html_url={html_url} />
      </div>
    );
  }
}
