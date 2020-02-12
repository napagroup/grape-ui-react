import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { PlainText } from '..';
import 'jest-styled-components';

describe('PlainText Component base', () => {
  it('should return a PlainText object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><PlainText>Lorem Ipsum</PlainText></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with ellipsis', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><PlainText ellipsis>Lorem Ipsum</PlainText></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with multi line ellipsis', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><PlainText ellipsis={2}>Lorem Ipsum</PlainText></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
