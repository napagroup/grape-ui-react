import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter as Router } from 'react-router-dom';
import { Link } from '..';
import 'jest-styled-components';

describe('Link Component base', () => {
  it('should return an anchor tag', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link>Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link href="./home">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Router><Link to="/home">Lorem Ipsum</Link></Router></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link Component specified styles', () => {
  it('should return a Link object with a base color (implicit)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link color="green">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a base color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link color="green.base">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a light color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link color="green.light">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a dark color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link color="green.dark">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link fontFamily="monospace">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link fontWeight="bold">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link italic>Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link lg>Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link sm>Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link kerning="2px">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link textAlign="right">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link textDecoration="underline">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with custom margin & padding', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Link m={1} p={1} textDecoration="underline">Lorem Ipsum</Link></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
