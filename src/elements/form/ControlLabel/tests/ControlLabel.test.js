import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ControlLabel } from '..';
import 'jest-styled-components';

describe('ControlLabel Component base', () => {
  it('should return a ControlLabel object', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><ControlLabel htmlFor="forWhatId">Label text is here</ControlLabel></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
