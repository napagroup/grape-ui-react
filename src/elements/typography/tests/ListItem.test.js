import React from 'react';
import { ListItem } from '../ListItem';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('ListItem Component base', () => {
  it('should return a ListItem object with base styling', () => {
    const component = renderer.create(<ListItem>Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('ListItem Component specified styles', () => {
  it('should return a ListItem object with font-style: italic', () => {
    const component = renderer.create(<ListItem italic>Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: lg', () => {
    const component = renderer.create(<ListItem lg>Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: sm', () => {
    const component = renderer.create(<ListItem sm>Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a base color (implicit)', () => {
    const component = renderer.create(<ListItem color="green">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a base color', () => {
    const component = renderer.create(<ListItem color="green.base">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a light color', () => {
    const component = renderer.create(<ListItem color="green.light">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a dark color', () => {
    const component = renderer.create(<ListItem color="green.dark">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified font-family', () => {
    const component = renderer.create(<ListItem fontFamily="monospace">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified font-weight', () => {
    const component = renderer.create(<ListItem fontWeight="bold">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified kerning', () => {
    const component = renderer.create(<ListItem kerning="2px">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified text-align', () => {
    const component = renderer.create(<ListItem textAlign="right">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with a specified text-decoration', () => {
    const component = renderer.create(<ListItem textDecoration="underline">Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
