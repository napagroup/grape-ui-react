import React from 'react';
import { CheckboxField } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
];
const selectedValue = ['red'];

describe('CheckboxField using Theme color', () => {
  it('should return a CheckboxField object with custom color', () => {
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
        <CheckboxField bg="grapeSoda.dark" color="grapeSoda.light" controlId="checkbox" labelText="Color" name="Color" options={colorOptions} value={selectedValue}>Lorem Ipsum</CheckboxField>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CheckboxField using Theme Font Family', () => {
  it('should return a CheckboxField object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <CheckboxField controlId="checkbox" fontFamily="trueSpace" labelText="Color" name="Color" options={colorOptions} value={selectedValue}>Lorem Ipsum</CheckboxField>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
