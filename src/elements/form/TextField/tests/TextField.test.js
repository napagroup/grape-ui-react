import React from 'react';
import { TextField } from '../TextField';
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
describe('TextField Component base with assistive text', () => {
  it('should return a TextField object', () => {
    const component = mount(<TextField assistiveText="Please tell me your name" controlId="exampleFullName" controlLabel="Full name" />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField Component base with validation error', () => {
  it('should return a TextField object', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" validationError="This is a require field."/>);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});