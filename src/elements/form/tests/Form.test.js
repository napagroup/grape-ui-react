import React from 'react';
import { Form } from '../index';
import 'jest-styled-components';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Form Component base', () => {
  it('should return a Form object without class inline', () => {
    const component = mount(<Form />);
    expect(toJson(component.find('Form'))).toMatchSnapshot();
  });
  it('should return a Form object with class inline', () => {
    const component = mount(<Form formInline />);
    expect(toJson(component.find('Form'))).toMatchSnapshot();
  });
});
