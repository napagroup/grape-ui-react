import React from 'react';
import { Header } from '../Header';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Header.h1 Component base', () => {
  it('should return a Header object with base styling', () => {
    const component = renderer.create(<Header>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header.h1 Component specified styles', () => {
  it('should return a Header object with a base color (implicit)', () => {
    const component = renderer.create(<Header color="green">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a base color', () => {
    const component = renderer.create(<Header color="green.base">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a light color', () => {
    const component = renderer.create(<Header color="green.light">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a dark color', () => {
    const component = renderer.create(<Header color="green.dark">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: display', () => {
    const component = renderer.create(<Header display>Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-family', () => {
    const component = renderer.create(<Header fontFamily="monospace">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-weight', () => {
    const component = renderer.create(<Header fontFamily="monospace">Lorem Ipsum</Header>);
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
  it('should return a Header object with a specified kerning', () => {
    const component = renderer.create(<Header kerning="2px">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-align', () => {
    const component = renderer.create(<Header textAlign="right">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-decoration', () => {
    const component = renderer.create(<Header textDecoration="underline">Lorem Ipsum</Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header Element sizes', () => {
  it('should return a Header h1 object', () => {
    const component = renderer.create(<Header.h1>Lorem Ipsum</Header.h1>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
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
