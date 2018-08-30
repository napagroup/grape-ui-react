import React from 'react';
import { TextField } from '../';
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
describe('TextField with assistive text', () => {
  it('should return a TextField object contain Assistive Text', () => {
    const component = mount(<TextField assistiveText="Please tell me your name" controlId="exampleFullName" controlLabel="Full name" />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with validation error', () => {
  it('should return a TextField object contain Assistive Text with error style', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" validationError="This is a require field." />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with some other props', () => {
  it('should return a TextField object contain input with those other props ', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" link="abc" require />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField  a large TextFieldComponent object', () => {
  it('should return a large TextFieldComponent object ', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" lg />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a small TextFieldComponent object ', () => {
    const component = mount(<TextField controlId="exampleFullName" controlLabel="Full name" sm />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a small TextFieldComponent object with space mb ', () => {
    const component = mount(<TextField controlId="exampleFullName2" controlLabel="Full name2" m="1" />);
    expect(toJson(component.find('TextField'))).toMatchSnapshot();
  });
});
