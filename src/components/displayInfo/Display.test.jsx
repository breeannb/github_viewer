import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Display username="Breeann" followers={4} following={200} html_url={'https://github.com/breeannb'} repos={[{ name: 'Breeann', html_url: 'https://github.com/breeannb' }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
