import React from 'react';
import { PlainText } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

describe('PlainText Component base', () => {
  it('should return a PlainText object', () => {
    const component = renderer.create(<PlainText>Lorem Ipsum</PlainText>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
