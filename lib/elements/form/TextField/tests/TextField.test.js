"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _typography = require("elements/typography");

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var proclaimersSong = _react2["default"].createElement(_typography.Link, {
  href: "https://youtu.be/tbNlMtqrYS0",
  target: "_blank"
}, "Well you know I'm gonna be...");

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('TextField Component base', function () {
  it('should return a TextField object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an id attribute provided', function () {
  it('should return a TextField with Label.htmlFor value based on controlId attribute', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      assistiveText: "Please tell me your name",
      controlId: "exampleFullNameCID",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', function () {
  it('should return a TextField object contain Assistive Text string', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      assistiveText: "Please tell me your name",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with object in assistive text', function () {
  it('should return a TextField object contain Assistive Text object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      assistiveText: proclaimersSong,
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', function () {
  it('should return a TextField object contain Assistive Text with error style', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName",
      validationError: "This is a required field."
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', function () {
  it('should return a TextField object contain input with those other props ', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      isRequired: true,
      labelText: "Full Name",
      link: "abc",
      name: "exampleFullName",
      validationError: "This is a required field."
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextField object', function () {
  it('should return a large TextField object ', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      labelText: "Full name",
      lg: true,
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', function () {
  it('should return a small TextField object ', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      labelText: "Full name",
      name: "exampleFullName",
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with space mb ', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      labelText: "Full name2",
      m: "1",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextField object with a red activeColor ', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      activeColor: "red",
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a disabled TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      activeColor: "red",
      disabled: true,
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextField', function () {
  it('should return a PlainText div TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      activeColor: "red",
      labelText: "Full name2",
      name: "exampleFullName2",
      plainText: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextField object', function () {
  it('should return a TextField object with a red bg', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      bg: "red",
      labelText: "Full name2",
      name: "exampleFullName2"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a password attribute', function () {
  it('should return a TextField of input type password', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "password",
      password: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an email attribute', function () {
  it('should return a TextField of input type email', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      email: true,
      name: "email"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a currency attribute', function () {
  it('should return a value in a currency format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      currency: true,
      name: "currency"
    })));
    var inputWrapper = component.find('input');
    var value = '314159.2653';
    var expected = '$314,159.26';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for currency format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      currency: true,
      name: "currency"
    })));
    var inputWrapper = component.find('input');
    var value = '314a1-59$.2653';
    var expected = '$314,159.26';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a numeric attribute', function () {
  it('should return a value in a numeric format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "numeric",
      numeric: true
    })));
    var inputWrapper = component.find('input');
    var value = '31415926.5385';
    var expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for numeric format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "numeric",
      numeric: true
    })));
    var inputWrapper = component.find('input');
    var value = '($314)a15!926.5358';
    var expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with an integer attribute', function () {
  it('should return a value in integer format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      integer: true,
      name: "integer"
    })));
    var inputWrapper = component.find('input');
    var value = '31415926.5358';
    var expected = '31,415,926';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for integer format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      integer: true,
      name: "integer"
    })));
    var inputWrapper = component.find('input');
    var value = '($314)a15!926.5358';
    var expected = '31,415,926';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a postalCode attribute', function () {
  it('should return a TextField of input type postalCode', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "postalCode",
      postalCode: true
    })));
    var inputWrapper = component.find('input');
    var value = '100-16';
    var expected = '10016';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for integer format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "postalCode",
      postalCode: true
    })));
    var inputWrapper = component.find('input');
    var value = '100ab16-abc-12345';
    var expected = '10016-1234';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a phone attribute', function () {
  it('should return a value in US phone format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "phone",
      phone: true
    })));
    var inputWrapper = component.find('input');
    var value = '(718)-55577-77';
    var expected = '718-555-7777';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate for the US Phone Format', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      name: "phone",
      phone: true
    })));
    var inputWrapper = component.find('input');
    var value = '718a5557b777';
    var expected = '718-555-7777';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with a formatterOptions attribute', function () {
  it('should return a value based on formatterOptions', function () {
    var option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      formatterOptions: option,
      name: "formatterOptions"
    })));
    var inputWrapper = component.find('input');
    var value = '31415926.5385';
    var expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
  it('should mask characters inappropriate based on formatterOptions', function () {
    var option = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      formatterOptions: option,
      name: "formatterOptions"
    })));
    var inputWrapper = component.find('input');
    var value = '($314)a15!926.5358';
    var expected = '31,415,926.53';
    inputWrapper.simulate('change', {
      target: {
        value: value
      }
    });
    var actual = inputWrapper.instance().value;
    expect(actual).toEqual(expected);
  });
});
describe('TextField with custom control group props', function () {
  it('should return a TextField with custom control group props', function () {
    var controlGroupProps = {
      pb: 2,
      pt: 0
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      controlGroupProps: controlGroupProps,
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with custom control label props', function () {
  it('should return a TextField with custom control label props', function () {
    var controlLabelProps = {
      px: 0,
      py: 2
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      controlLabelProps: controlLabelProps,
      labelText: "Address",
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with custom assistive text props', function () {
  it('should return a TextField with custom assistive text props', function () {
    var assistiveTextProps = {
      px: 0,
      py: 3
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      assistiveText: "Example: 123 ABC",
      assistiveTextProps: assistiveTextProps,
      name: "formatterOptions"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a multiline option', function () {
  it('should return a multiline TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      maxRows: 7,
      minRows: 2,
      multiline: true,
      name: "exampleDescription"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled', function () {
  it('should return a formStyle filled TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      formStyle: "filled",
      labelText: "Full name",
      name: "exampleFullName"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled and plain text', function () {
  it('should return a formStyle filled readonly TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      formStyle: "filled",
      labelText: "Full name",
      name: "exampleFullName",
      plainText: true,
      value: "I should be contained in a plain div"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with formStyle set to filled, multiline and plain text', function () {
  it('should return a formStyle filled multline readonly TextField', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
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