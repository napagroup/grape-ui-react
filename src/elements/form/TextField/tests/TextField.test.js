import React from 'react';
import { TextField } from '..';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('TextField Component base', () => {
  it('should return a TextField object', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', () => {
  it('should return a TextField object contain Assistive Text', () => {
    const element = <TextField assistiveText="Please tell me your name" controlId="exampleFullName" labelText="Full name" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', () => {
  it('should return a TextField object contain Assistive Text with error style', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" validationError="This is a required field." />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', () => {
  it('should return a TextField object contain input with those other props ', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" link="abc" required />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextFieldComponent object', () => {
  it('should return a large TextFieldComponent object ', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" lg />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a small TextFieldComponent object ', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" sm />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a small TextFieldComponent object with space mb ', () => {
    const element = <TextField controlId="exampleFullName2" labelText="Full name2" m="1" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a small TextFieldComponent object with a red activeColor ', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', () => {
  it('should return a disabled TextFieldComponent', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" disabled labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextFieldComponent', () => {
  it('should return a disabled TextFieldComponent', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" labelText="Full name2" plainText />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextFieldComponent object', () => {
  it('should return a TextFieldComponent object with a red bgColor ', () => {
    const element = <TextField bgColor="red" controlId="exampleFullName2" labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
