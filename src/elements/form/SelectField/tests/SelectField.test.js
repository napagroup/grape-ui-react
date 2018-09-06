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
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', () => {
  it('should return a SelectField with assistive text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with required text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} required value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with error text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} validationError="This is a required field." value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with lg text', () => {
  it('should return a SelectField with style', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" lg options={colorOptions} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with sm text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" borderColor="orange" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with bgColor', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" bgColor="red" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with activeColor', () => {
    const component = mount(<SelectField activeColor="cyan" assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" m={4} options={colorOptions} p={4} value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', () => {
  it('should return a SelectField with plainText', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" id="exampleColor" plainText value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
  it('should return a SelectField with disabled', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" disabled id="exampleColor" value={colorOptions[1]} />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isSearchable and placeholder ', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" m={4} options={colorOptions} p={4} isSearchable placeholder="Please search your color" />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
  it('should return a SelectField with isClearable and placeholder ', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color, hit x to clear" controlId="exampleColor" controlLabel="Color" id="exampleColor" m={4} options={colorOptions} p={4} isSearchable placeholder="Please search your color" />);
    expect(toJson(component.find('SelectField'))).toMatchSnapshot();
  });
});