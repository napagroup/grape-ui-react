import React from 'react';
import { CheckboxFieldComponent } from '../';
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
    const component = mount(<CheckboxFieldComponent id="exampleColor" name="Color" options={colorOptions} value={selectedValue} />);
    expect(toJson(component.find('CheckboxFieldComponent'))).toMatchSnapshot();
  });
});
