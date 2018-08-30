import React from 'react';
import { TextFieldComponent } from '../TextFieldComponent';
import 'jest-styled-components';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('TextFieldComponent base', () => {
  it('should return a TextFieldComponent object', () => {
    const component = mount(<TextFieldComponent />);
    expect(toJson(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', () => {
    const component = mount(<TextFieldComponent sm />);
    expect(toJson(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', () => {
    const component = mount(<TextFieldComponent lg />);
    expect(toJson(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
});

describe('TextField with a responsive width', () => {
  it('should return a TextFieldComponent object with a responsive width', () => {
    const component = mount(<TextFieldComponent controlId="exampleFullName" controlLabel="Full name" width={[1, 1 / 2, 1 / 3, 1 / 4]} />);
    expect(toJson(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
});
