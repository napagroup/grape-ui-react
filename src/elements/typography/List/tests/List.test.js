import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { List } from '..';
import 'jest-styled-components';

describe('List Component', () => {
  it('should return a List object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List italic>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List lg>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List sm>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with custom margin and paddings', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List m={1} p={1}>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('List Specific Styling', () => {
  it('should return an unstyled List object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List unstyled>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline List object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List inline>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color (implicit)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List color="green">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List color="green.base">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a light color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List color="green.light">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a dark color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List color="green.dark">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with ellipsis', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List ellipsis>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List fontFamily="monospace">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List fontWeight="bold">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List sm>Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List kerning="2px">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List textAlign="right">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List textDecoration="underline">Lorem Ipsum</List></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Component', () => {
  it('should return a Numbered List object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol italic>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered Numbered List object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol lg>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol sm>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals uppercase', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol type="I">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals lowercase', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol type="i">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha uppercase', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol type="A">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha lowercase', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol type="a">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Specific Styling', () => {
  it('should return an unstyled Numbered List object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol unstyled>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline Numbered List object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol inline>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color (implicit)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol color="green">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol color="green.base">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a light color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol color="green.light">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a dark color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol color="green.dark">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol fontFamily="monospace">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol fontWeight="bold">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol sm>Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol kerning="2px">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-align', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol textAlign="right">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-decoration', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><List.ol textDecoration="underline">Lorem Ipsum</List.ol></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
