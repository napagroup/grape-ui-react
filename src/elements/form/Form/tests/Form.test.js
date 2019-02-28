import React from 'react';
import { Form } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { TextField } from '../../TextField/';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Form Component base', () => {
  it('should return a Form object', () => {
    const element = <Form />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', () => {
    const element = <Form display="flex" flexDirection="column" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with div that do not get formStyle="filled"', () => {
    const element = <Form display="flex" formStyle="filled"><div id="1" /></Form>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object and textField with filled formStyle', () => {
    const element = <Form display="flex" formStyle="filled"><TextField controlId="exampleFullName" labelText="Full name" /></Form>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object with filled formStyle and textField with outlined', () => {
    const element = <Form display="flex" formStyle="filled"><TextField controlId="exampleFullName" formStyle="outlined" labelText="Full name" /></Form>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object with 2 filled formStyle and textField', () => {
    const element = <Form display="flex" formStyle="filled"><TextField controlId="exampleFullName" labelText="Full name" /><TextField controlId="address" labelText="Address" /></Form>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
