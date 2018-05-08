import React from 'react';
import { List } from '../List';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

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
