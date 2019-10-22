import React from 'react';
import { Link } from 'elements/typography';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { TextField } from '..';

const proclaimersSong = <Link href="https://youtu.be/tbNlMtqrYS0" target="_blank">Well you know I&#39;m gonna be...</Link>;

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });
describe('TextField Component base', () => {
  it('should return a TextField object', () => {
    const element = <ThemeProvider theme={{}}><TextField labelText="Full name" name="exampleFullName" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an id attribute provided', () => {
  it('should return a TextField with Label.htmlFor value based on controlId attribute', () => {
    const element = <ThemeProvider theme={{}}><TextField assistiveText="Please tell me your name" controlId="exampleFullNameCID" labelText="Full name" name="exampleFullName" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', () => {
  it('should return a TextField object contain Assistive Text', () => {
    const element = <ThemeProvider theme={{}}><TextField assistiveText="Please tell me your name" labelText="Full name" name="exampleFullName" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with object in assistive text', () => {
  it('should return a TextField object contain Assistive Text', () => {
    const element = <ThemeProvider theme={{}}><TextField assistiveText={proclaimersSong} labelText="Full name" name="exampleFullName" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', () => {
  it('should return a TextField object contain Assistive Text with error style', () => {
    const element = <ThemeProvider theme={{}}><TextField labelText="Full name" name="exampleFullName" validationError="This is a required field." /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', () => {
  it('should return a TextField object contain input with those other props ', () => {
    const element = <ThemeProvider theme={{}}><TextField isRequired labelText="Full Name" link="abc" name="exampleFullName" validationError="This is a required field." /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextField object', () => {
  it('should return a large TextField object ', () => {
    const element = <ThemeProvider theme={{}}><TextField labelText="Full name" lg name="exampleFullName" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', () => {
  it('should return a small TextField object ', () => {
    const element = <ThemeProvider theme={{}}><TextField labelText="Full name" name="exampleFullName" sm /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with space mb ', () => {
    const element = <ThemeProvider theme={{}}><TextField labelText="Full name2" m="1" name="exampleFullName2" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with a red activeColor ', () => {
    const element = <ThemeProvider theme={{}}><TextField activeColor="red" labelText="Full name2" name="exampleFullName2" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a disabled TextField', () => {
    const element = <ThemeProvider theme={{}}><TextField activeColor="red" disabled labelText="Full name2" name="exampleFullName2" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextField', () => {
  it('should return a disabled TextField', () => {
    const element = <ThemeProvider theme={{}}><TextField activeColor="red" labelText="Full name2" name="exampleFullName2" plainText /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextField object', () => {
  it('should return a TextField object with a red bg', () => {
    const element = <ThemeProvider theme={{}}><TextField bg="red" labelText="Full name2" name="exampleFullName2" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a password attribute', () => {
  it('should return a TextField of input type password', () => {
    const element = <ThemeProvider theme={{}}><TextField name="password" password /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with an email attribute', () => {
  it('should return a TextField of input type email', () => {
    const element = <ThemeProvider theme={{}}><TextField email name="email" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with a currency attribute', () => {
  it('should return a TextField of input type currency', () => {
    const component = mount(<ThemeProvider theme={{}}><TextField currency name="currency" /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a numeric attribute', () => {
  it('should return a TextField of input type numeric', () => {
    const component = mount(<ThemeProvider theme={{}}><TextField name="numeric" numeric /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with an integer attribute', () => {
  it('should return a TextField of input type integer', () => {
    const component = mount(<ThemeProvider theme={{}}><TextField integer name="integer" /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a postalCode attribute', () => {
  it('should return a TextField of input type postalCode', () => {
    const component = mount(<ThemeProvider theme={{}}><TextField name="postalCode" postalCode /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a phone attribute', () => {
  it('should return a TextField of input type phone', () => {
    const component = mount(<ThemeProvider theme={{}}><TextField name="phone" phone /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with a formatterOptions attribute', () => {
  it('should return a TextField with formatterOptions', () => {
    const option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    };
    const component = mount(<ThemeProvider theme={{}}><TextField formatterOptions={option} name="formatterOptions" /></ThemeProvider>);
    expect(component.find('TextInputComponent')).toMatchSnapshot();
  });
});

describe('TextField with custom control group props', () => {
  it('should return a TextField with custom control group props', () => {
    const controlGroupProps = {
      pb: 2,
      pt: 0,
    };
    const element = <ThemeProvider theme={{}}><TextField controlGroupProps={controlGroupProps} name="formatterOptions" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with custom control label props', () => {
  it('should return a TextField with custom control label props', () => {
    const controlLabelProps = {
      px: 0,
      py: 2,
    };
    const element = <ThemeProvider theme={{}}><TextField controlLabelProps={controlLabelProps} labelText="Address" name="formatterOptions" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextField with custom assistive text props', () => {
  it('should return a TextField with custom assistive text props', () => {
    const assistiveTextProps = {
      px: 0,
      py: 3,
    };
    const element = <ThemeProvider theme={{}}><TextField assistiveText="Example: 123 ABC" assistiveTextProps={assistiveTextProps} name="formatterOptions" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
