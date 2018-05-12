import React from 'react';
import { List } from '../List';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('List Component', () => {
  it('should return a List object with font-style: base', () => {
    const component = renderer.create(<List>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-style: italic', () => {
    const component = renderer.create(<List italic>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: lg', () => {
    const component = renderer.create(<List lg>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', () => {
    const component = renderer.create(<List sm>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('List Specific Styling', () => {
  it('should return an unstyled List object', () => {
    const component = renderer.create(<List unstyled>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline List object', () => {
    const component = renderer.create(<List inline>Lorem Ipsum</List>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Component', () => {
  it('should return a Numbered List object with font-style: base', () => {
    const component = renderer.create(<List.ol>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-style: italic', () => {
    const component = renderer.create(<List.ol italic>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered Numbered List object with font-size: lg', () => {
    const component = renderer.create(<List.ol lg>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-size: sm', () => {
    const component = renderer.create(<List.ol sm>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Specific Styling', () => {
  it('should return an unstyled Numbered List object', () => {
    const component = renderer.create(<List.ol unstyled>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline Numbered List object', () => {
    const component = renderer.create(<List.ol inline>Lorem Ipsum</List.ol>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
