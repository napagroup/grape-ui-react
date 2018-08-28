import React from 'react';
import { TextField } from '../components/TextField/index';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('TextField Component base', () => {
  it('should return a TextField object', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
