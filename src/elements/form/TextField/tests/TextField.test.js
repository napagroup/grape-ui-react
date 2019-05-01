import React from 'react';
import { TextField } from '..';
import { Link } from 'elements/typography';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

const proclaimersSong = <Link href="https://youtu.be/tbNlMtqrYS0" target="_blank">Well you know I&#39;m gonna be...</Link>;

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });
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
describe('TextField with object in assistive text', () => {
  it('should return a TextField object contain Assistive Text', () => {
    const element = <TextField assistiveText={proclaimersSong} controlId="exampleFullName" labelText="Full name" />;
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
describe('TextField  a large TextField object', () => {
  it('should return a large TextField object ', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" lg />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', () => {
  it('should return a small TextField object ', () => {
    const element = <TextField controlId="exampleFullName" labelText="Full name" sm />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with space mb ', () => {
    const element = <TextField controlId="exampleFullName2" labelText="Full name2" m="1" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with a red activeColor ', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a disabled TextField', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" disabled labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextField', () => {
  it('should return a disabled TextField', () => {
    const element = <TextField activeColor="red" controlId="exampleFullName2" labelText="Full name2" plainText />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextField object', () => {
  it('should return a TextField object with a red bg', () => {
    const element = <TextField bg="red" controlId="exampleFullName2" labelText="Full name2" />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a password attribute', () => {
  it('should return a TextField of input type password', () => {
    const element = <TextField controlId="password" password />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with an email attribute', () => {
  it('should return a TextField of input type email', () => {
    const element = <TextField controlId="email" email />;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with a currency attribute', () => {
  it('should return a TextField of input type currency', () => {
    const component = mount(<TextField controlId="currency" currency />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a numeric attribute', () => {
  it('should return a TextField of input type numeric', () => {
    const component = mount(<TextField controlId="numeric" numeric />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with an integer attribute', () => {
  it('should return a TextField of input type integer', () => {
    const component = mount(<TextField controlId="integer" integer />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a postalCode attribute', () => {
  it('should return a TextField of input type postalCode', () => {
    const component = mount(<TextField controlId="postalCode" postalCode />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a phone attribute', () => {
  it('should return a TextField of input type phone', () => {
    const component = mount(<TextField controlId="phone" phone />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a formatterOptions attribute', () => {
  it('should return a TextField with formatterOptions', () => {
    const option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    };
    const component = mount(<TextField controlId="formatterOptions" formatterOptions={option} />);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});
