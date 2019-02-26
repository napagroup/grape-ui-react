import React from 'react';
import { Button } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button base', () => {
  it('should return a Button', () => {
    const element = <Button>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', () => {
    const element = <Button disabled id="exampleColor">Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', () => {
  it('should return a Button with bgColor and color', () => {
    const element = <Button bgColor="green" color="brandDanger" id="exampleColor">Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', () => {
    const element = <Button id="exampleColor" sm>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', () => {
    const element = <Button id="exampleColor" lg>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with a zIndex when using a string', () => {
    const element = <Button zIndex="500">Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', () => {
    const element = <Button zIndex={500}>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

