import React from 'react';
import { AssistiveText } from '../AssistiveText';
import 'jest-styled-components';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Assistive Text Component base', () => {
  it('should return an Assistive Text object', () => {
    const component = mount(<AssistiveText id="assitiveTextIdHelp">Helper text is here</AssistiveText>);
    expect(toJson(component.find('AssistiveText'))).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', () => {
    const component = mount(<AssistiveText id="assitiveTextIdError" color="brandDanger">Error text is here</AssistiveText>);
    expect(toJson(component.find('AssistiveText'))).toMatchSnapshot();
  });
});
