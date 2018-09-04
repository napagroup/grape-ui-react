import React from 'react';
import { SelectField } from '../';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
const colorOptions = [
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
];

describe('SelectField Component base', () => {
  it('should return a SelectField object', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} sm />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', () => {
  it('should return a SelectField with assistive text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with error text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" defaultValue={colorOptions[1]} id="exampleColor" options={colorOptions} validationError="This is a required field." />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});
