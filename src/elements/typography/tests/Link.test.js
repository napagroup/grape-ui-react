import React from 'react';
import { Link } from '../Link';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

describe('Link Component', () => {
  it('should return an anchor tag', () => {
    const component = renderer.create(<Link>Lorem Ipsum</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag', () => {
    const component = renderer.create(<Router><Link to="./home">Lorem Ipsum</Link></Router>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
