import React from 'react';
import { Header } from '../Header';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

describe('Header.h1 Component', () => {
  it('should return a Header object with font-style: base', () => {
    const component = renderer.create(<Header>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-style: italic', () => {
    const component = renderer.create(<Header italic>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: lg', () => {
    const component = renderer.create(<Header lg>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: sm', () => {
    const component = renderer.create(<Header sm>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Header Elements Component', () => {
  it('should return a Header h2 object', () => {
    const component = renderer.create(<Header.h2>Lorem Ipsum</Header.h2>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h3 object', () => {
    const component = renderer.create(<Header.h3>Lorem Ipsum</Header.h3>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h4 object', () => {
    const component = renderer.create(<Header.h4>Lorem Ipsum</Header.h4>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h5 object', () => {
    const component = renderer.create(<Header.h5>Lorem Ipsum</Header.h5>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h6 object', () => {
    const component = renderer.create(<Header.h6>Lorem Ipsum</Header.h6>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});