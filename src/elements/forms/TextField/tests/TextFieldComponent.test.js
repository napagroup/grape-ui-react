import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { TextFieldComponent } from '..';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });

describe('TextFieldComponent base', () => {
  it('should return a TextFieldComponent object', () => {
    const element = <ThemeProvider theme={{}}><TextFieldComponent /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', () => {
    const element = <ThemeProvider theme={{}}><TextFieldComponent sm /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', () => {
    const element = <ThemeProvider theme={{}}><TextFieldComponent lg /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a password attribute', () => {
  it('should return a TextFieldComponent of input type password', () => {
    const element = <ThemeProvider theme={{}}><TextFieldComponent password /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with an email attribute', () => {
  it('should return a TextFieldComponent of input type email', () => {
    const element = <ThemeProvider theme={{}}><TextFieldComponent email /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a currency attribute', () => {
  it('should return a TextFieldComponent that contains has currency style', () => {
    const component = mount(<ThemeProvider theme={{}}><TextFieldComponent currency /></ThemeProvider>);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a integer attribute', () => {
  it('should return a TextFieldComponent that contains has integer style', () => {
    const component = mount(<ThemeProvider theme={{}}><TextFieldComponent integer /></ThemeProvider>);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a numeric attribute', () => {
  it('should return a TextFieldComponent that contains has numeric style', () => {
    const component = mount(<ThemeProvider theme={{}}><TextFieldComponent numeric /></ThemeProvider>);
    expect(component.find('input')).toMatchSnapshot();
  });
});


describe('TextFieldComponent with a phone attribute', () => {
  it('should return a TextFieldComponent that contains has phone style', () => {
    const component = mount(<ThemeProvider theme={{}}><TextFieldComponent phone /></ThemeProvider>);
    expect(component.find('input')).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a postalCode attribute', () => {
  it('should return a TextFieldComponent that contains has postalCode style', () => {
    const component = mount(<ThemeProvider theme={{}}><TextFieldComponent numeric /></ThemeProvider>);
    expect(component.find('input')).toMatchSnapshot();
  });
});
