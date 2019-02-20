import React from 'react';
import { CheckboxFieldComponent } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
];

describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const selectedValue = ['red'];
    const element = <CheckboxFieldComponent id="exampleColor" name="Color" options={colorOptions} value={selectedValue} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
