import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Button } from '..';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button base', () => {
  it('should return a Button', () => {
    const element = (
      <Button>Button Base</Button>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an outlined Button', () => {
    const element = <Button id="buttonOutline" outline>Button Outline</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained Button', () => {
    const element = <Button contained id="buttonContained">Button Contained</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained raised Button', () => {
    const element = <Button contained id="buttonContainedRaised" raised>Button Contained and Raised</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with disabled', () => {
    const element = <Button disabled id="exampleColor">Disabled button</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', () => {
  it('should return a Button with bg and color', () => {
    const element = <Button bg="green" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', () => {
    const element = <Button bg="green" bgActiveColor="green.light" bgHoverColor="green.dark" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button>;
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
  it('should return a Link with href with button look', () => {
    const element = <Button href="https://www.google.com/" target="_blank">google</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', () => {
    const element = <Router><Button to="/404">404</Button></Router>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
