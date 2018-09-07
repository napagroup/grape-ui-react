import React from 'react';
import { SelectField } from '../';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });
const colorOptions = [
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
];

describe('SelectField Component base', () => {
  it('should return a SelectField that contains SelectFieldComponent object', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').html())).toMatchSnapshot();
  });
  it('should return a SelectField that contains ControlLabel object', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('ControlLabel').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', () => {
  it('should return a SelectField with assistive text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect((component.find('AssistiveText').html())).toMatchSnapshot();
  });

  it('should return a SelectField with error text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} validationError="This is a required field." value={colorOptions[1]} />);
    expect((component.find('AssistiveText').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with ControlLabel with *', () => {
  it('should return a SelectField  with ControlLabel with *', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} required value={colorOptions[1]} />);
    expect((component.find('ControlLabel').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with style', () => {
  it('should return a SelectField with style lg prop = true', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" lg options={colorOptions} value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').props('lg'))).toMatchSnapshot();
  });
  it('should return a SelectField with sm text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').props('sm'))).toMatchSnapshot();
  });
  it('should return a SelectField with bgColor', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" bgColor="red" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" borderColor="orange" controlId="exampleColor" controlLabel="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabel="Color" id="exampleColor" m={4} options={colorOptions} p={4} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', () => {
  it('should return a SelectField with plainText', () => {
    const component = renderer.create(<SelectField controlId="exampleColor" controlLabel="Color" id="exampleColor" plainText value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a SelectField with disabled', () => {
    const component = mount(<SelectField controlId="exampleColor" controlLabel="Color" disabled id="exampleColor" value={colorOptions[1]} />);
    expect((component.find('input').props('disabled'))).toMatchSnapshot();
  });
});

describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isClearable and placeholder ', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color, hit x to clear" controlId="exampleColor" controlLabel="Color" id="exampleColor" isSearchable m={4} options={colorOptions} p={4} placeholder="Please search your color" />);
    expect((component.find('svg').props())).toMatchSnapshot();
  });
});
