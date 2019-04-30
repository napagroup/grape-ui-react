import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { Text } from '..';
import 'jest-styled-components';

describe('Text using Theme color', () => {
  it('should return a Text object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)',
        },
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Text bg="grapeSoda.dark" color="grapeSoda.light">Lorem Ipsum</Text>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Text using Theme Font Family', () => {
  it('should return a Text object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Text fontFamily="trueSpace">Lorem Ipsum</Text>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
