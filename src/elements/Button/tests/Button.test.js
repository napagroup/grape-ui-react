import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { MemoryRouter as Router } from 'react-router-dom';
import { Button } from '..';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button base', () => {
  it('should return a Button', () => {
    const element = (
      <Button>Do this</Button>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with disabled', () => {
    const element = <Button disabled id="exampleColor">Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', () => {
  it('should return a Button with bgColor and color', () => {
    const element = <Button bg="green" color="brandDanger" id="exampleColor">Do this</Button>;
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

describe('Button using theme colors', () => {
  it('should return a Button', () => {
    const globalStyles = getGlobalStyles();
    const { colors } = globalStyles;
    const theme = {
      colors: {
        ...colors,
        yellow: {
          base: 'hsl(65, 65%, 50%)',
          dark: 'hsl(65, 65%, 25%)',
          light: 'hsl(65, 65%, 68%)',
        },
      },
      space: [0, 4, 8, 16],
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Button bg="yellow" color="yellow.dark">Do this</Button>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Button using styled system fontSize', () => {
    it('should return a Button with specified font size', () => {
      const element = (
        <Button fontSize={3} variant="primary">Do this</Button>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button using variant style theme colors', () => {
    xit('should return a Button', () => {
      const theme = {
        buttons: {
          primary: {
            '&:hover': {
              backgroundColor: 'black',
            },
            backgroundColor: 'blue',
            color: 'white',
          },
        },
        space: [0, 4, 8, 16],
      };
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="primary">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
