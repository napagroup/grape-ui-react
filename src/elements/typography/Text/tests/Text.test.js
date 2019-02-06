import React from 'react';
import { Text } from '../';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Text Component base', () => {
  it('should return a Text object with base styling', () => {
    const component = renderer.create(<Text>Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Text Component specified styles', () => {
  it('should return a Text object with a specified color', () => {
    const component = renderer.create(<Text color="green.light">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-family', () => {
    const component = renderer.create(<Text fontFamily="monospace">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-weight', () => {
    const component = renderer.create(<Text fontWeight="bolder">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-style: italic', () => {
    const component = renderer.create(<Text italic>Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified kerning', () => {
    const component = renderer.create(<Text kerning="1px">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: lg', () => {
    const component = renderer.create(<Text lg>Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: sm', () => {
    const component = renderer.create(<Text sm>Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-align', () => {
    const component = renderer.create(<Text textAlign="right">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-decoration', () => {
    const component = renderer.create(<Text textDecoration="underline">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

