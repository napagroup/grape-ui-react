import React from 'react';
import { TextFieldComponent } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });

describe('TextFieldComponent base', () => {
  it('should return a TextFieldComponent object', () => {
    const element = <TextFieldComponent />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', () => {
    const element = <TextFieldComponent sm />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', () => {
    const element = <TextFieldComponent lg />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a password attribute', () => {
  it('should return a TextFieldComponent of input type password', () => {
    const element = <TextFieldComponent password />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with an email attribute', () => {
  it('should return a TextFieldComponent of input type email', () => {
    const element = <TextFieldComponent email />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a currency attribute', () => {
  it('should return a TextFieldComponent that contains has currency style', () => {
    const component = mount(<TextFieldComponent currency />);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a integer attribute', () => {
  it('should return a TextFieldComponent that contains has integer style', () => {
    const component = mount(<TextFieldComponent integer />);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a numeric attribute', () => {
  it('should return a TextFieldComponent that contains has numeric style', () => {
    const component = mount(<TextFieldComponent numeric />);
    expect(component.find('input')).toMatchSnapshot();
  });
});


describe('TextFieldComponent with a phone attribute', () => {
  it('should return a TextFieldComponent that contains has phone style', () => {
    const component = mount(<TextFieldComponent phone />);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a postalCode attribute', () => {
  it('should return a TextFieldComponent that contains has postalCode style', () => {
    const component = mount(<TextFieldComponent numeric />);
    expect(component.find('input')).toMatchSnapshot();
  });
});
