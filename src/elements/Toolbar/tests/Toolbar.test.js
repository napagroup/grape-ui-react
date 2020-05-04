import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Toolbar } from 'src/elements/Toolbar';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Box Component base', () => {
  it('should return an empty Toolbar with base styling', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Toolbar />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
