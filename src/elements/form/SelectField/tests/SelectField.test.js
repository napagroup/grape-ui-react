import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { SelectField } from '..';
import { colorOptions } from '../examples';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });

const linkState = () => null;

describe('SelectField Component', () => {
  it('should return a SelectField that contains SelectFieldComponent object', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <SelectField
          name="exampleBasicUsage"
          onChange={linkState()}
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectFieldComponent with a Control Label', () => {
  it('should return a SelectField that contains a ControlLabel object', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <SelectField
          labelText="Color"
          name="exampleControlLabel"
          onChange={linkState()}
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that adds an asterisk to the ControlLabel object', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <SelectField
          isRequired
          labelText="Color"
          name="exampleControlLabelRequired"
          onChange={linkState()}
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with custom Control Label props', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <SelectField
          controlLabelProps={{ px: 0, py: 3 }}
          isRequired
          labelText="Color"
          name="exampleControlLabelRequired"
          onChange={linkState()}
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component dropdown', () => {
  it('should return a dropdown menu with the selected option is in the proper color', () => {
    const element = mount(
      <ThemeProvider theme={{}}>
        <SelectField
          assistiveText="Only three colors are available."
          labelText="Color"
          menuIsOpen
          name="exampleAssistiveText"
          options={colorOptions}
          value={colorOptions[1]}
        />
      </ThemeProvider>
    );
    expect(element.find('div.grape-ui-select__option--is-selected')).toMatchSnapshot();
  });
});

describe('SelectField Component with Assistive Text', () => {
  it('should return a SelectField that contains an AssistiveText object', () => {
    const component = mount(
      <ThemeProvider theme={{}}>
        <SelectField
          assistiveText="Only three colors are available."
          labelText="Color"
          name="exampleAssistiveText"
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(component.find('div[id="exampleAssistiveTextHelp"]')).toMatchSnapshot();
  });
  it('should return a SelectField where error text hides assistive text', () => {
    const component = mount(
      <ThemeProvider theme={{}}>
        <SelectField
          assistiveText="Only three colors are available."
          isRequired
          labelText="Color"
          name="exampleAssistiveText"
          options={colorOptions}
          validationError="This field is required."
        />
      </ThemeProvider>
    );
    expect(component.find('div[id="exampleAssistiveTextError"]')).toMatchSnapshot();
  });
  it('should return a SelectField with custom AssistiveText props', () => {
    const component = mount(
      <ThemeProvider theme={{}}>
        <SelectField
          assistiveText="Only three colors are available."
          assistiveTextProps={{
            px: 0,
            py: 3,
          }}
          labelText="Color"
          name="exampleAssistiveText"
          options={colorOptions}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(component)).toMatchSnapshot();
    // expect(component.find('.c1')).toHaveStyleRule('padding-left', '0');
  });
});

describe('SelectField Component with style', () => {
  it('should return a SelectFieldComponent with props where lg={true}', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" lg options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} sm value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" bg="red" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" borderColor="orange" controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that is from right to left;', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" isRtl labelText="Color" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" m={4} options={colorOptions} p={4} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" m={4} options={colorOptions} p={4} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with custom Control Group props', () => {
  it('should return a SelectField with custom control group props', () => {
    const element = <ThemeProvider theme={{}}><SelectField controlGroupProps={{ pb: 2, pt: 0 }} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField Component with custom Control Label props', () => {
  it('should return a SelectField with custom control label props', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" controlLabelProps={{ px: 0, py: 3 }} id="exampleColor" labelText="Color" m={4} options={colorOptions} p={4} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField with custom assistive text props', () => {
  it('should return a SelectField with custom assistive text props', () => {
    const assistiveTextProps = {
      px: 0,
      py: 3,
    };
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" assistiveTextProps={assistiveTextProps} controlId="exampleColor" id="exampleColor" labelText="Color" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField with custom menu elevation', () => {
  it('should return a SelectField with different zIndex and boxShadow values', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" menuElevation="03" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField with custom z-index', () => {
  it('should return a SelectField with different zIndex than the menuElevation preset', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" labelText="Color" menuElevation="03" menuZIndex="2000" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField with focus', () => {
  it('should return a SelectField with isFocused set to true', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" isFocused labelText="Color" menuElevation="03" menuZIndex="2000" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectField that is disabled', () => {
  it('should return a SelectField with isDisabled set to true', () => {
    const element = <ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color" controlId="exampleColor" id="exampleColor" isDisabled labelText="Color" menuElevation="03" menuZIndex="2000" options={colorOptions} value={colorOptions[1]} /></ThemeProvider>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

// TODO: This test down below isn't running.  Not sure why.  --R
describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isClearable set to true', () => {
    const component = mount(<ThemeProvider theme={{}}><SelectField assistiveText="Please tell me your color, hit x to clear" controlId="exampleColor" id="exampleColor" isClearable labelText="Color" m={4} options={colorOptions} p={4} placeholder="Please search your color" /></ThemeProvider>);
    expect(component.find('SelectField').props().isClearable).toEqual(true);
  });
});

describe('SelectField with isCreatable prop set to true', () => {
  it('should return a Creatable Multiselect SelectField component', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <SelectField
          controlId="exampleColor"
          id="exampleColor"
          isCreatable
          labelText="Color"
          options={colorOptions}
          sm
          value={colorOptions[1]}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
