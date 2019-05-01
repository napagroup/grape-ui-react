import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { SelectField } from '..';
import { ThemeProvider } from 'styled-components';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { color: '#FF5630', label: 'Red', value: 'red' },
  { color: '#FFC400', label: 'Yellow', value: 'yellow' },
  { color: '#36B37E', label: 'Green', value: 'green' },
];


describe('SelectField using Theme color', () => {
  it('should return a SelectField object with custom color', () => {
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
        <SelectField bg="grapeSoda.dark" color="grapeSoda.light" controlId="exampleControl" id="exampleControl" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField using Theme Font Family', () => {
  it('should return a SelectField object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <SelectField controlId="exampleControl" fontFamily="trueSpace" id="exampleControl" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
