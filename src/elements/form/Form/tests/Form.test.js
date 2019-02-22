import React from 'react';
import { Form } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

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
});
