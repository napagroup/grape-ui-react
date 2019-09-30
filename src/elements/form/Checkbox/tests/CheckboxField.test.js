import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxField } from '..';
import 'jest-styled-components';

const emptyTheme = {};

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
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" disabled labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" flexDirection={['column', 'row']} labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with assistive text', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent with assistive text', () => {
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="Tell me your color" controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} required value="" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with required', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent required', () => {
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} required value="" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with validationError', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent validationError', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="" controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} required validationError="This is required" value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 1 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', () => {
    const selectedValue = colorOptions[0];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="Please select one" controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 2 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = [colorOptions[0], colorOptions[1]];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" flexDirection={['column', 'row']} labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
