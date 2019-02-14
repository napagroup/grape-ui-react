import React from 'react';
import { ControlLabel } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

describe('ControlLabel Component base', () => {
  it('should return a ControlLabel object', () => {
    const component = renderer.create(<ControlLabel htmlFor="forWhatId">Label text is here</ControlLabel>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
