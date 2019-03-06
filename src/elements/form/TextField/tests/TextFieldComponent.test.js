import React from 'react';
import { TextFieldComponent } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('TextFieldComponent base', () => {
  it('should return a TextFieldComponent object', () => {
    const element = <TextFieldComponent />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', () => {
    const element = <TextFieldComponent sm />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', () => {
    const element = <TextFieldComponent lg />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a password attribute', () => {
  it('should return a TextFieldComponent of input type password', () => {
    const element = <TextFieldComponent password />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with an email attribute', () => {
  it('should return a TextFieldComponent of input type email', () => {
    const element = <TextFieldComponent email />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
