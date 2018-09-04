import React from 'react';
import { SelectFieldComponent } from '../SelectFieldComponent';
import 'jest-styled-components';
// import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
const colorOptions = [
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
];

describe('SelectFieldComponent base', () => {
  it('should return a SelectFieldComponent object', () => {
    const component = mount(<SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} />);
    expect(toJson(component.find('SelectFieldComponent'))).toMatchSnapshot();
  });
});

describe('SelectFieldComponent with some style relate', () => {
  it('should return a SelectFieldComponent lg object', () => {
    const component = mount(<SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" lg options={colorOptions} />);
    expect(toJson(component.find('SelectFieldComponent'))).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', () => {
    const component = mount(<SelectFieldComponent defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} sm />);
    expect(toJson(component.find('SelectFieldComponent'))).toMatchSnapshot();
  });
});

