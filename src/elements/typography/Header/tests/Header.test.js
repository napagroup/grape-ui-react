import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Header } from '..';
import 'jest-styled-components';

describe('Header.h1 Component base', () => {
  it('should return a Header object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header.h1 Component specified styles', () => {
  it('should return a Header object with a base color (implicit)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header color="green">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a base color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header color="green.base">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a light color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header color="green.light">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a dark color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header color="green.dark">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: display', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header display>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with ellipsis', () => {
    const component = renderer.create(<Header ellipsis>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header fontFamily="monospace">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header fontWeight="bold">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-weight overriding the display font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header display fontWeight="bold">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header italic>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header lg>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header sm>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header kerning="2px">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header textAlign="right">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header textDecoration="underline">Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with custom margin and padding', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header mb={1} mt={1}>Lorem Ipsum</Header></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header Element sizes', () => {
  it('should return a Header h1 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h1>Lorem Ipsum</Header.h1></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h2 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h2>Lorem Ipsum</Header.h2></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h3 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h3>Lorem Ipsum</Header.h3></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h4 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h4>Lorem Ipsum</Header.h4></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h5 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h5>Lorem Ipsum</Header.h5></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h6 object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Header.h6>Lorem Ipsum</Header.h6></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
