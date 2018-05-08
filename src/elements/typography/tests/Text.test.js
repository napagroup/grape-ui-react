import React from 'react';
import { Text } from '../Text';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

describe('Text Component', () => {
  it('should return a Text object with font-style: base', () => {
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
});
