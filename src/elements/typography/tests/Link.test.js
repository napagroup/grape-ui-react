import React from 'react';
import { Link, StyledReactRouterLink } from '../Link';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

describe('Link Component base', () => {
  it('should return an anchor tag', () => {
    const component = renderer.create(<Link>Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', () => {
    const component = renderer.create(<Link href="./home">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', () => {
    const component = renderer.create(<Router><StyledReactRouterLink to="./home">Lorem Ipsum</StyledReactRouterLink></Router>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link Component specified styles', () => {
  it('should return a Link object with a base color (implicit)', () => {
    const component = renderer.create(<Link color="green">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a base color', () => {
    const component = renderer.create(<Link color="green.base">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a light color', () => {
    const component = renderer.create(<Link color="green.light">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a dark color', () => {
    const component = renderer.create(<Link color="green.dark">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-family', () => {
    const component = renderer.create(<Link fontFamily="monospace">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-weight', () => {
    const component = renderer.create(<Link fontWeight="bold">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-style: italic', () => {
    const component = renderer.create(<Link italic>Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: lg', () => {
    const component = renderer.create(<Link lg>Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: sm', () => {
    const component = renderer.create(<Link sm>Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified kerning', () => {
    const component = renderer.create(<Link kerning="2px">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-align', () => {
    const component = renderer.create(<Link textAlign="right">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-decoration', () => {
    const component = renderer.create(<Link textDecoration="underline">Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
