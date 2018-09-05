import React from 'react';
import { ControlLabel } from '../ControlLabel';
import 'jest-styled-components';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ControlLabel Component base', () => {
  it('should return a ControlLabel object', () => {
    const component = mount(<ControlLabel for="forWhatId">Label text is here</ControlLabel>);
    expect(toJson(component.find('ControlLabel'))).toMatchSnapshot();
  });
});
