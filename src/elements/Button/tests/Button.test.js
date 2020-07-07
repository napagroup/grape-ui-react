import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from '..';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button base', () => {
  it('should return a Button', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}><Button>Button Base</Button></ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an outlined Button', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button id="buttonOutline" outline>Button Outline</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained Button', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button contained id="buttonContained">Button Contained</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained raised Button', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button contained id="buttonContainedRaised" raised>Button Contained and Raised</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with disabled', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button disabled id="exampleColor">Disabled button</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with leading icon', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button leadingIcon="foo">Leading Icon on this button</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with loading indicator', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button showProgress>Loading...</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', () => {
  it('should return a Button with bg and color', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button bg="green" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button bg="green" bgActiveColor="green.light" bgHoverColor="green.dark" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button id="exampleColor" sm>Do this</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button id="exampleColor" lg>Do this</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with a zIndex when using a string', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button zIndex="500">Do this</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button zIndex={500}>Do this</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', () => {
    const element = <ThemeProvider theme={emptyTheme}><Button href="https://www.google.com/" target="_blank">google</Button></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', () => {
    const element = <ThemeProvider theme={emptyTheme}><Router><Button to="/404">404</Button></Router></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button object with mailto props filled out', () => {
    const component = renderer.create(
      <ThemeProvider theme={{}}>
        <Button
          emailHref={{
            bcc: 'email@napa.com',
            body: 'Body text for email.',
            cc: 'email@napa.com',
            subject: 'Subject line',
            to: 'email@napa.com',
          }}
        >
          Lorem Ipsum
        </Button>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
