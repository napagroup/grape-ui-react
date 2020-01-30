import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { OverlayComponent } from '../OverlayComponent';
import 'jest-styled-components';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Overlay Component base', () => {
  it('should return an Overlay Component object', () => {
    const element = <ThemeProvider theme={emptyTheme}><OverlayComponent>I am an overlay component.</OverlayComponent></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Overlay Component with position set to relative', () => {
    const element = <ThemeProvider theme={emptyTheme}><OverlayComponent position="relative">I am relative.</OverlayComponent></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
