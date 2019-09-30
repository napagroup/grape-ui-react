import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { AssistiveText } from '..';
import 'jest-styled-components';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Assistive Text Component base', () => {
  it('should return an Assistive Text object', () => {
    const element = <ThemeProvider theme={emptyTheme}><AssistiveText id="assitiveTextIdHelp">Helper text is here</AssistiveText></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', () => {
    const element = <ThemeProvider theme={emptyTheme}><AssistiveText color="brandDanger" id="assitiveTextIdError">Error text is here</AssistiveText></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
