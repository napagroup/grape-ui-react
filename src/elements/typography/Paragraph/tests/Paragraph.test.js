import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Paragraph } from '..';
import 'jest-styled-components';

describe('Paragraph Component base', () => {
  it('should return a Paragraph object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', () => {
  it('should return a Paragraph object with a green color', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph color="green">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with ellipsis', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph ellipsis>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph fontFamily="serif">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph fontWeight="bold">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph italic>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph kerning="1px">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph lg>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph sm>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph textAlign="right">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph lead>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph textDecoration="underline">Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with custom margins', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Paragraph mb={1} mt={1}>Lorem Ipsum</Paragraph></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
