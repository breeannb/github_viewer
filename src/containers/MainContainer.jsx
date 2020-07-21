import React, { Component } from 'react';
import UserInput from '../components/UserInput/UserInput';
import Display from '../components/displayInfo/Display';

export default class MainContainer extends Component {
  
  render() {
    return (
      <>
        <UserInput />
        <Display />
      </>
    );
  }
}
