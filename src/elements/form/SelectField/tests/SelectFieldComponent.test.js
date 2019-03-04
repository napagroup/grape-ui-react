import React from 'react';
import { SelectFieldComponent } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

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
    const element = <SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectFieldComponent with some style relate', () => {
  it('should return a SelectFieldComponent lg object', () => {
    const element = <SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" lg options={colorOptions} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', () => {
    const element = <SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} sm />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
