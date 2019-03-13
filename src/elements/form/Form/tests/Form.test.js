import React from 'react';
import { Form } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { TextField } from '../../TextField';
import { SelectField } from '../../SelectField';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { color: '#FF5630', label: 'Red', value: 'red' },
  { color: '#FFC400', label: 'Yellow', value: 'yellow' },
  { color: '#36B37E', label: 'Green', value: 'green' },
];

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

  it('should return a Form object with 2 filled formStyle with 2 textField and 1 SelectField', () => {
    const element = (
      <Form display="flex" formStyle="filled">
        <TextField controlId="exampleFullName" labelText="Full name" />
        <TextField controlId="address" labelText="Address" />
        <SelectField controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />
      </Form>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
