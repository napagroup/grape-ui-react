import React from 'react';
import { Text } from '../Text';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Text Component', () => {
  it('should return a Text object with base styling', () => {
    const component = renderer.create(<Text>Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-style: italic', () => {
    const component = renderer.create(<Text italic>Lorem Ipsum</Text>);
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
  it('should return a Text object with font-family: serif', () => {
    const component = renderer.create(<Text fontFamily="serif">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with kerning: 1px', () => {
    const component = renderer.create(<Text kerning="1px">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with text-align: right', () => {
    const component = renderer.create(<Text textAlign="right">Lorem Ipsum</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
