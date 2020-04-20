"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _examples = require("./examples");

var _ = require("..");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});

const linkState = () => null;

describe('SelectField Component', () => {
  it('should return a SelectField that contains SelectFieldComponent object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      name: "exampleBasicUsage",
      onChange: linkState(),
      options: _examples.colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with a Control Label', () => {
  it('should return a SelectField that contains a ControlLabel object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      labelText: "Color",
      name: "exampleControlLabel",
      onChange: linkState(),
      options: _examples.colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that adds an asterisk to the ControlLabel object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      isRequired: true,
      labelText: "Color",
      name: "exampleControlLabelRequired",
      onChange: linkState(),
      options: _examples.colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with custom Control Label props', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlLabelProps: {
        px: 0,
        py: 3
      },
      isRequired: true,
      labelText: "Color",
      name: "exampleControlLabelRequired",
      onChange: linkState(),
      options: _examples.colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component dropdown', () => {
  it('should return a dropdown menu with the selected option is in the proper color', () => {
    const element = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Only three colors are available.",
      labelText: "Color",
      menuIsOpen: true,
      name: "exampleAssistiveText",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    })));
    expect((0, _find.default)(element).call(element, 'div.grape-ui-select__option--is-selected')).toMatchSnapshot();
  });
});
describe('SelectField Component with Assistive Text', () => {
  it('should return a SelectField that contains an AssistiveText object', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Only three colors are available.",
      labelText: "Color",
      name: "exampleAssistiveText",
      options: _examples.colorOptions
    })));
    expect((0, _find.default)(component).call(component, 'div[id="exampleAssistiveTextHelp"]')).toMatchSnapshot();
  });
  it('should return a SelectField where error text hides assistive text', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Only three colors are available.",
      isRequired: true,
      labelText: "Color",
      name: "exampleAssistiveText",
      options: _examples.colorOptions,
      validationError: "This field is required."
    })));
    expect((0, _find.default)(component).call(component, 'div[id="exampleAssistiveTextError"]')).toMatchSnapshot();
  });
  it('should return a SelectField with custom AssistiveText props', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Only three colors are available.",
      assistiveTextProps: {
        px: 0,
        py: 3
      },
      labelText: "Color",
      name: "exampleAssistiveText",
      options: _examples.colorOptions
    })));
    expect(assertReactElement(component)).toMatchSnapshot(); // expect(component.find('.c1')).toHaveStyleRule('padding-left', '0');
  });
});
describe('SelectField Component with style', () => {
  it('should return a SelectFieldComponent with props where lg={true}', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      lg: true,
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: _examples.colorOptions,
      sm: true,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      bg: "red",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      borderColor: "orange",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that is from right to left;', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      isRtl: true,
      labelText: "Color",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: _examples.colorOptions,
      p: 4,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with space', () => {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: _examples.colorOptions,
      p: 4,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with custom Control Group props', () => {
  it('should return a SelectField with custom control group props', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlGroupProps: {
        pb: 2,
        pt: 0
      }
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with custom Control Label props', () => {
  it('should return a SelectField with custom control label props', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      controlLabelProps: {
        px: 0,
        py: 3
      },
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: _examples.colorOptions,
      p: 4,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom assistive text props', () => {
  it('should return a SelectField with custom assistive text props', () => {
    const assistiveTextProps = {
      px: 0,
      py: 3
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      assistiveTextProps: assistiveTextProps,
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom menu elevation', () => {
  it('should return a SelectField with different zIndex and boxShadow values', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      menuElevation: "03",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with custom z-index', () => {
  it('should return a SelectField with different zIndex than the menuElevation preset', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with focus', () => {
  it('should return a SelectField with isFocused set to true', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isFocused: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField that is disabled', () => {
  it('should return a SelectField with isDisabled set to true', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isDisabled: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: _examples.colorOptions,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField that is plainText', () => {
  it('should return a SelectField with plainText set to true', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      isDisabled: true,
      labelText: "Color",
      menuElevation: "03",
      menuZIndex: "2000",
      options: _examples.colorOptions,
      plainText: true,
      value: [_examples.colorOptions[1], _examples.colorOptions[2]]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
}); // TODO: This test down below isn't running.  Not sure why.  --R

describe('SelectField Component with react-select predefined props', () => {
  it('should return a SelectField with isClearable set to true', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color, hit x to clear",
      controlId: "exampleColor",
      id: "exampleColor",
      isClearable: true,
      labelText: "Color",
      m: 4,
      options: _examples.colorOptions,
      p: 4,
      placeholder: "Please search your color"
    })));
    expect((0, _find.default)(component).call(component, 'SelectField').props().isClearable).toEqual(true);
  });
});
describe('SelectField with isCreatable prop set to true', () => {
  it('should return a Creatable Multiselect SelectField component', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isCreatable: true,
      labelText: "Color",
      options: _examples.colorOptions,
      sm: true,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with isAsync prop set to true', () => {
  it('should return an AsyncSelect SelectField component', () => {
    const loadOptions = () => _promise.default.resolve(_examples.colorOptions);

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isAsync: true,
      labelText: "Color",
      loadOptions: loadOptions,
      sm: true,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField with isAsync and isCreatable prop set to true', () => {
  it('should return an AsyncCreatableSelect SelectField component', () => {
    const loadOptions = () => _promise.default.resolve(_examples.colorOptions);

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      isAsync: true,
      isCreatable: true,
      labelText: "Color",
      loadOptions: loadOptions,
      sm: true,
      value: _examples.colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});