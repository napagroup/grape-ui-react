import React from 'react';
import { CheckboxField } from '../';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
];
describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const selectedValue = ['red'];
    const component = mount(<CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} value={selectedValue} />);
    expect(toJson(component.find('CheckboxField'))).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', () => {
    const selectedValue = ['red'];
    const component = mount(<CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} />);
    expect(toJson(component.find('CheckboxField'))).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = ['red'];
    const component = mount(<CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} disabled value={selectedValue} />);
    expect(toJson(component.find('CheckboxField'))).toMatchSnapshot();
  });
});

