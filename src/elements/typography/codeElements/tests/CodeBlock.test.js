import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Code } from 'src/elements/typography';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Code Component base', () => {
  it('should return an empty Code with base styling', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Code code={'<Code code="" />'} />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an empty Code with a valid JSX element', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Code code={<Code code={'<Code code="" />'} />} />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
