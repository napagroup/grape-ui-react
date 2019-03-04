import React from 'react';
import { CheckboxField } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
];
describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const selectedValue = ['red'];
    const element = <CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} value={selectedValue} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', () => {
    const selectedValue = ['red'];
    const element = <CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = ['red'];
    const element = <CheckboxField controlId="exampleColor" disabled labelText="Color" name="Color" options={colorOptions} value={selectedValue} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
