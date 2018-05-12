import React from 'react';
import { ListItem } from '../ListItem';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('ListItem Component', () => {
  it('should return a ListItem object with font-style: base', () => {
    const component = renderer.create(<ListItem>Lorem Ipsum</ListItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
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
});
