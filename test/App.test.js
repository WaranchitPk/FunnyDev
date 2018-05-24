import {App} from '../src/components';
import React from 'react';
import {shallow} from 'enzyme';

describe('App',() => {
    test('should match snapshot', () => {
      const wrapper = shallow(<App/>)
      expect(wrapper.find('h1').text()).toBe('Welcome to my Boilerplate')
      expect(wrapper).toMatchSnapshot
    });
});