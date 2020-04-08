import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Form, SelectField, TextField } from 'src/elements/forms';
import 'jest-styled-components';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { color: '#FF5630', label: 'Red', value: 'red' },
  { color: '#FFC400', label: 'Yellow', value: 'yellow' },
  { color: '#36B37E', label: 'Green', value: 'green' },
];

describe('Form Component base', () => {
  it('should return a Form object', () => {
    const element = <ThemeProvider theme={{}}><Form /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', () => {
    const element = <ThemeProvider theme={{}}><Form display="flex" flexDirection="column" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with div that do not get formStyle="filled"', () => {
    const element = <ThemeProvider theme={{}}><Form display="flex" formStyle="filled"><div id="1" /></Form></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object and textField with filled formStyle', () => {
    const element = <ThemeProvider theme={{}}><Form display="flex" formStyle="filled"><TextField controlId="exampleFullName" labelText="Full name" /></Form></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object with filled formStyle and textField with outlined', () => {
    const element = <ThemeProvider theme={{}}><Form display="flex" formStyle="filled"><TextField controlId="exampleFullName" formStyle="outlined" labelText="Full name" /></Form></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object with 2 filled formStyle with 2 textField and 1 SelectField', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <Form display="flex" formStyle="filled">
          <TextField controlId="exampleFullName" labelText="Full name" />
          <TextField controlId="address" labelText="Address" />
          <SelectField controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />
        </Form>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
