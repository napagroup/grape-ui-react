import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { SelectFieldComponent } from '..';
import 'jest-styled-components';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { color: '#FF5630', label: 'Red', value: 'red' },
  { color: '#FFC400', label: 'Yellow', value: 'yellow' },
  { color: '#36B37E', label: 'Green', value: 'green' },
];

describe('SelectFieldComponent base', () => {
  it('should return a SelectFieldComponent object', () => {
    const element = <ThemeProvider theme={{}}><SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectFieldComponent with some style relate', () => {
  it('should return a SelectFieldComponent lg object', () => {
    const element = <ThemeProvider theme={{}}><SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" lg options={colorOptions} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', () => {
    const element = <ThemeProvider theme={{}}><SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} sm /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
