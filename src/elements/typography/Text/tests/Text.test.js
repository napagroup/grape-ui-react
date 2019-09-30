import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Text } from '..';
import 'jest-styled-components';

describe('Text Component base', () => {
  it('should return a Text object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text>Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Text Component specified styles', () => {
  it('should return a Text object with a specified color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text color="green.light">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text fontFamily="monospace">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text fontWeight="bolder">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text italic>Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text kerning="1px">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text lg>Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text sm>Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text textAlign="right">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Text textDecoration="underline">Lorem Ipsum</Text></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
