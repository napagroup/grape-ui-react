"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

var _typography = require("elements/typography");

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _ = require("..");

const proclaimersSong = /*#__PURE__*/_react.default.createElement(_typography.Link, {
  href: "https://youtu.be/tbNlMtqrYS0",
  target: "_blank"
}, "Well you know I'm gonna be...");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('TextField Component base', () => {
  it('should return a TextField object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an id attribute provided', () => {
  it('should return a TextField with Label.htmlFor value based on controlId attribute', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      assistiveText: "Please tell me your name",
      controlId: "exampleFullNameCID",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', () => {
  it('should return a TextField object contain Assistive Text string', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      assistiveText: "Please tell me your name",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with object in assistive text', () => {
  it('should return a TextField object contain Assistive Text object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      assistiveText: proclaimersSong,
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', () => {
  it('should return a TextField object contain Assistive Text with error style', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName",
      validationError: "This is a required field."
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', () => {
  it('should return a TextField object contain input with those other props ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      isRequired: true,
      labelText: "Full Name",
      link: "abc",
      name: "exampleFullName",
      validationError: "This is a required field."
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextField object', () => {
  it('should return a large TextField object ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      labelText: "Full name",
      lg: true,
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', () => {
  it('should return a small TextField object ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName",
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with space mb ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      labelText: "Full name2",
      m: "1",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with a red activeColor ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      activeColor: "red",
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a disabled TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      activeColor: "red",
      disabled: true,
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextField', () => {
  it('should return a PlainText div TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      activeColor: "red",
      labelText: "Full name2",
      name: "exampleFullName2",
      plainText: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextField object', () => {
  it('should return a TextField object with a red bg', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      bg: "red",
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a password attribute', () => {
  it('should return a TextField of input type password', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "password",
      password: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an email attribute', () => {
  it('should return a TextField of input type email', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      email: true,
      name: "email"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a currency attribute', () => {
  it('should return a value in a currency format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      currency: true,
      name: "currency"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '314159.2653';
    const expected = '$314,159.26';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for currency format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      currency: true,
      name: "currency"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '314a1-59$.2653';
    const expected = '$314,159.26';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a numeric attribute', () => {
  it('should return a value in a numeric format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "numeric",
      numeric: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '31415926.5385';
    const expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for numeric format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "numeric",
      numeric: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '($314)a15!926.5358';
    const expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with an integer attribute', () => {
  it('should return a value in integer format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      integer: true,
      name: "integer"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '31415926.5358';
    const expected = '31,415,926';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for integer format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      integer: true,
      name: "integer"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '($314)a15!926.5358';
    const expected = '31,415,926';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a postalCode attribute', () => {
  it('should return a TextField of input type postalCode', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "postalCode",
      postalCode: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '100-16';
    const expected = '10016';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for integer format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "postalCode",
      postalCode: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '100ab16-abc-12345';
    const expected = '10016-1234';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a phone attribute', () => {
  it('should return a value in US phone format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "phone",
      phone: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '(718)-55577-77';
    const expected = '718-555-7777';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for the US Phone Format', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      name: "phone",
      phone: true
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '718a5557b777';
    const expected = '718-555-7777';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a formatterOptions attribute', () => {
  it('should return a value based on formatterOptions', () => {
    const option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      formatterOptions: option,
      name: "formatterOptions"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '31415926.5385';
    const expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate based on formatterOptions', () => {
    const option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      formatterOptions: option,
      name: "formatterOptions"
    })));
    const inputWrapper = (0, _find.default)(component).call(component, 'input');
    const value = '($314)a15!926.5358';
    const expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value
      }
    });
    const actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with custom control group props', () => {
  it('should return a TextField with custom control group props', () => {
    const controlGroupProps = {
      pb: 2,
      pt: 0
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      controlGroupProps: controlGroupProps,
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with custom control label props', () => {
  it('should return a TextField with custom control label props', () => {
    const controlLabelProps = {
      px: 0,
      py: 2
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      controlLabelProps: controlLabelProps,
      labelText: "Address",
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with custom assistive text props', () => {
  it('should return a TextField with custom assistive text props', () => {
    const assistiveTextProps = {
      px: 0,
      py: 3
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      assistiveText: "Example: 123 ABC",
      assistiveTextProps: assistiveTextProps,
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a multiline option', () => {
  it('should return a multiline TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      maxRows: 7,
      minRows: 2,
      multiline: true,
      name: "exampleDescription"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled', () => {
  it('should return a formStyle filled TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      formStyle: "filled",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled and plain text', () => {
  it('should return a formStyle filled readonly TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      formStyle: "filled",
      labelText: "Full name",
      name: "exampleFullName",
      plainText: true,
      value: "I should be contained in a plain div"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled, multiline and plain text', () => {
  it('should return a formStyle filled multline readonly TextField', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      formStyle: "filled",
      labelText: "Full name",
      multiline: true,
      name: "exampleFullName",
      plainText: true,
      value: "I should be contained in a plain div"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});