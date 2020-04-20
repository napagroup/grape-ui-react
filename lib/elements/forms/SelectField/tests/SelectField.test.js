import "core-js/modules/es.date.to-json";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/web.url.to-json";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { colorOptions } from './examples';
import { SelectField } from '..';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

configure({
  adapter: new Adapter()
});

var linkState = function linkState() {
  return null;
};

describe('SelectField Component', function () {
  it('should return a SelectField that contains SelectFieldComponent object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      name: "exampleBasicUsage",
      onChange: linkState(),
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with a Control Label', function () {
  it('should return a SelectField that contains a ControlLabel object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      labelText: "Color",
      name: "exampleControlLabel",
      onChange: linkState(),
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that adds an asterisk to the ControlLabel object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      isRequired: true,
      labelText: "Color",
      name: "exampleControlLabelRequired",
      onChange: linkState(),
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with custom Control Label props', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      controlLabelProps: {
        px: 0,
        py: 3
      },
      isRequired: true,
      labelText: "Color",
      name: "exampleControlLabelRequired",
      onChange: linkState(),
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component dropdown', function () {
  it('should return a dropdown menu with the selected option is in the proper color', function () {
    var element = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Only three colors are available.",
      labelText: "Color",
      menuIsOpen: true,
      name: "exampleAssistiveText",
      options: colorOptions,
      value: colorOptions[1]
    })));
    expect(_findInstanceProperty(element).call(element, 'div.grape-ui-select__option--is-selected')).toMatchSnapshot();
  });
});
describe('SelectField Component with Assistive Text', function () {
  it('should return a SelectField that contains an AssistiveText object', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Only three colors are available.",
      labelText: "Color",
      name: "exampleAssistiveText",
      options: colorOptions
    })));
    expect(_findInstanceProperty(component).call(component, 'div[id="exampleAssistiveTextHelp"]')).toMatchSnapshot();
  });
  it('should return a SelectField where error text hides assistive text', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Only three colors are available.",
      isRequired: true,
      labelText: "Color",
      name: "exampleAssistiveText",
      options: colorOptions,
      validationError: "This field is required."
    })));
    expect(_findInstanceProperty(component).call(component, 'div[id="exampleAssistiveTextError"]')).toMatchSnapshot();
  });
  it('should return a SelectField with custom AssistiveText props', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Only three colors are available.",
      assistiveTextProps: {
        px: 0,
        py: 3
      },
      labelText: "Color",
      name: "exampleAssistiveText",
      options: colorOptions
    })));
    expect(assertReactElement(component)).toMatchSnapshot(); // expect(component.find('.c1')).toHaveStyleRule('padding-left', '0');
  });
});
describe('SelectField Component with style', function () {
  it('should return a SelectFieldComponent with props where lg={true}', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      lg: true,
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      bg: "red",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      borderColor: "orange",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that is from right to left;', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      isRtl: true,
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with space', function () {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with space', function () {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with custom Control Group props', function () {
  it('should return a SelectField with custom control group props', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      controlGroupProps: {
        pb: 2,
        pt: 0
      }
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with custom Control Label props', function () {
  it('should return a SelectField with custom control label props', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      controlLabelProps: {
        px: 0,
        py: 3
      },
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom assistive text props', function () {
  it('should return a SelectField with custom assistive text props', function () {
    var assistiveTextProps = {
      px: 0,
      py: 3
    };
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      assistiveTextProps: assistiveTextProps,
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom menu elevation', function () {
  it('should return a SelectField with different zIndex and boxShadow values', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      menuElevation: "03",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom z-index', function () {
  it('should return a SelectField with different zIndex than the menuElevation preset', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with focus', function () {
  it('should return a SelectField with isFocused set to true', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isFocused: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField that is disabled', function () {
  it('should return a SelectField with isDisabled set to true', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isDisabled: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField that is plainText', function () {
  it('should return a SelectField with plainText set to true', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isDisabled: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: colorOptions,
      plainText: true,
      value: [colorOptions[1], colorOptions[2]]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
}); // TODO: This test down below isn't running.  Not sure why.  --R

describe('SelectField Component with react-select predefined props', function () {
  it('should return a SelectField with isClearable set to true', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      assistiveText: "Please tell me your color, hit x to clear",
      controlId: "exampleColor",
      id: "exampleColor",
      isClearable: true,
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      placeholder: "Please search your color"
    })));
    expect(_findInstanceProperty(component).call(component, 'SelectField').props().isClearable).toEqual(true);
  });
});
describe('SelectField with isCreatable prop set to true', function () {
  it('should return a Creatable Multiselect SelectField component', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isCreatable: true,
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with isAsync prop set to true', function () {
  it('should return an AsyncSelect SelectField component', function () {
    var loadOptions = function loadOptions() {
      return _Promise.resolve(colorOptions);
    };

    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isAsync: true,
      labelText: "Color",
      loadOptions: loadOptions,
      sm: true,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with isAsync and isCreatable prop set to true', function () {
  it('should return an AsyncCreatableSelect SelectField component', function () {
    var loadOptions = function loadOptions() {
      return _Promise.resolve(colorOptions);
    };

    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isAsync: true,
      isCreatable: true,
      labelText: "Color",
      loadOptions: loadOptions,
      sm: true,
      value: colorOptions[1]
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});