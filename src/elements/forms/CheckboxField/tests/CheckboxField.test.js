import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxField } from '..';
import 'jest-styled-components';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
];
describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" disabled labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" flexDirection={['column', 'row']} labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with assistive text', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent with assistive text', () => {
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="Tell me your color" controlId="exampleColor" isRequired labelText="Color" name="Color" options={colorOptions} value="" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with required', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent is required', () => {
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" isRequired labelText="Color" name="Color" options={colorOptions} value="" /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with validationError', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent validationError', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="" controlId="exampleColor" isRequired labelText="Color" name="Color" options={colorOptions} validationError="This is required" value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 1 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', () => {
    const selectedValue = colorOptions[0];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="Please select one" controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 2 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const selectedValue = [colorOptions[0], colorOptions[1]];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" labelText="Color" name="Color" options={colorOptions} plainText value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" flexDirection={['column', 'row']} labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with no label', () => {
  it('should return a CheckboxField that contains no ControlLabel', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" flexDirection={['column', 'row']} name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom assistive text props', () => {
  it('should return a CheckboxField that contains custom assistive text props', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField assistiveText="Select at least one" assistiveTextProps={{ px: 0, py: 3 }} controlId="exampleColor" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlGroupProps', () => {
  it('should return a CheckboxField that contains custom controlGroupProps', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlGroupProps={{ pb: 0, pt: 0 }} controlId="exampleColor" flexDirection={['column', 'row']} name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlLabelProps', () => {
  it('should return a CheckboxField that contains custom controlLabelProps', () => {
    const selectedValue = ['red'];
    const element = <ThemeProvider theme={emptyTheme}><CheckboxField controlId="exampleColor" controlLabelProps={{ px: 0, py: 1 }} labelText="Color" name="Color" options={colorOptions} value={selectedValue} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom wrapper props', () => {
  it('should return a CheckboxField that contain custom wrapper props', () => {
    const selectedValue = ['red'];
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <CheckboxField
          controlId="exampleColor"
          flexDirection={['column', 'row']}
          name="Color"
          options={colorOptions}
          value={selectedValue}
          wrapperProps={{
            pb: 1,
            px: 2,
          }}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
