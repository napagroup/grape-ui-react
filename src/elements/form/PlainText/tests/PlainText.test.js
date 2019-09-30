import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { PlainText } from '..';
import 'jest-styled-components';

describe('PlainText Component base', () => {
  it('should return a PlainText object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><PlainText>Lorem Ipsum</PlainText></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
