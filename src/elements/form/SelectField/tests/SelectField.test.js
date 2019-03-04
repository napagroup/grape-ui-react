import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { PlainText } from 'src/elements/form/PlainText';
import { SelectField } from '..';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });
const colorOptions = [
  { color: '#FF5630', label: 'Red', value: 'red' },
  { color: '#FFC400', label: 'Yellow', value: 'yellow' },
  { color: '#36B37E', label: 'Green', value: 'green' },
];

describe('SelectField Component base', () => {
  it('should return a SelectField that contains SelectFieldComponent object', () => {
    const element = <SelectField controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that contains ControlLabel object', () => {
    const component = mount(<SelectField controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />);
    expect(component.find('label')).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', () => {
  it('should return a SelectField with assistive text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} />);
    expect(component.find('div[id="exampleColorHelp"]')).toMatchSnapshot();
  });

  it('should return a SelectField with error text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} validationError="This is a required field." value={colorOptions[1]} />);
    expect(component.find('div[id="exampleColorError"]')).toMatchSnapshot();
  });
});

describe('SelectField Component with ControlLabel with *', () => {
  it('should return a SelectField  with ControlLabel with *', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} required value={colorOptions[1]} />);
    expect(component.find('label')).toMatchSnapshot();
  });
});

describe('SelectField Component with style', () => {
  it('should return a SelectFieldComponent with props where lg={true}', () => {
    const element = <SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" lg options={colorOptions} value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', () => {
    const element = <SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', () => {
    const element = <SelectField assistiveText="Please tell me your color" bgColor="red" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', () => {
    const element = <SelectField assistiveText="Please tell me your color" borderColor="orange" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const element = <SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" m={4} options={colorOptions} p={4} value={colorOptions[1]} />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', () => {
  it('should return a SelectField with plainText with <div> Yellow </div> rendered', () => {
    const element = <SelectField controlId="exampleColor" id="exampleColor" labelText="Color" plainText value={colorOptions[1]} />;
    const component = mount(element);
    expect(component.find(PlainText).find('div')).toMatchSnapshot();
  });
  it('should return a SelectField with disabled input contains a props "disabled": true', () => {
    const component = mount(<SelectField controlId="exampleColor" disabled id="exampleColor" labelText="Color" value={colorOptions[1]} />);
    expect(component.find('input').props().disabled).toEqual(true);
  });
});

describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isClearable set to true', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color, hit x to clear" controlId="exampleColor" id="exampleColor" isClearable labelText="Color" m={4} options={colorOptions} p={4} placeholder="Please search your color" />);
    expect(component.find('SelectField').props().isClearable).toEqual(true);
  });
});
