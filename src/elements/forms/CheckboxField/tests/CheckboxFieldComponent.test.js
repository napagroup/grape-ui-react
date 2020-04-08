import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxFieldComponent } from '..';
import 'jest-styled-components';

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
    const element = <ThemeProvider theme={{}}><CheckboxFieldComponent id="exampleColor" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a CheckboxFieldComponent that contains PlainText object', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={{}}><CheckboxFieldComponent id="exampleColor" name="Color" options={colorOptions} plainText value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
