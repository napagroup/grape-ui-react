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
    const component = mount(<SelectField controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').html())).toMatchSnapshot();
  });
  it('should return a SelectField that contains ControlLabel object', () => {
    const component = mount(<SelectField controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('ControlLabel').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', () => {
  it('should return a SelectField with assistive text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    expect((component.find('AssistiveText').html())).toMatchSnapshot();
  });

  it('should return a SelectField with error text', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} validationError="This is a required field." value={colorOptions[1]} />);
    expect((component.find('AssistiveText').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with ControlLabel with *', () => {
  it('should return a SelectField  with ControlLabel with *', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} required value={colorOptions[1]} />);
    expect((component.find('ControlLabel').html())).toMatchSnapshot();
  });
});

describe('SelectField Component with style', () => {
  it('should return a SelectFieldComponent with props where lg={true}', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" lg options={colorOptions} value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').props('lg'))).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} sm value={colorOptions[1]} />);
    expect((component.find('SelectFieldComponent').props('sm'))).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" bgColor="red" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" borderColor="orange" controlId="exampleColor" labelText="Color" id="exampleColor" options={colorOptions} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const component = renderer.create(<SelectField assistiveText="Please tell me your color" controlId="exampleColor" labelText="Color" id="exampleColor" m={4} options={colorOptions} p={4} value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', () => {
  it('should return a SelectField with plainText with <div> Yellow </div> rendered', () => {
    const component = renderer.create(<SelectField controlId="exampleColor" labelText="Color" id="exampleColor" plainText value={colorOptions[1]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a SelectField with disabled input contains a props "disabled": true', () => {
    const component = mount(<SelectField controlId="exampleColor" labelText="Color" disabled id="exampleColor" value={colorOptions[1]} />);
    expect((component.find('input').props('disabled'))).toMatchSnapshot();
  });
});

describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isClearable and placeholder contains a element svg that draw a x', () => {
    const component = mount(<SelectField assistiveText="Please tell me your color, hit x to clear" controlId="exampleColor" labelText="Color" id="exampleColor" isSearchable m={4} options={colorOptions} p={4} placeholder="Please search your color" />);
    expect((component.find('svg').props())).toMatchSnapshot();
  });
});
