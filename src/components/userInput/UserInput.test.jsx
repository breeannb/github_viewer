import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
