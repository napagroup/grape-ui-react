import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ListItem } from '..';
import 'jest-styled-components';

describe('ListItem Component base', () => {
  it('should return a ListItem object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('ListItem Component specified styles', () => {
  it('should return a ListItem object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem italic>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem lg>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem sm>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a base color (implicit)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem color="green">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a base color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem color="green.base">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a light color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem color="green.light">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a dark color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem color="green.dark">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with ellipsis', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem ellipsis>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem fontFamily="monospace">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem fontWeight="bold">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem kerning="2px">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem textAlign="right">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem textDecoration="underline">Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with custom margins', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ListItem mb={1}>Lorem Ipsum</ListItem></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
