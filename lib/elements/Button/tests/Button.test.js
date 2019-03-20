"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _globalStyles = require("../../../global-styles");

var _reactRouterDom = require("react-router-dom");

var _ = require("..");

var _styledHelpers = require("../../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);

  return component.toJSON();
};

describe('Button base', function () {
  it('should return a Button', function () {
    var element = _react2.default.createElement(_.Button, null, "Button Base");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an outlined Button', function () {
    var element = _react2.default.createElement(_.Button, {
      id: "buttonOutline",
      outline: true
    }, "Button Outline");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained Button', function () {
    var element = _react2.default.createElement(_.Button, {
      contained: true,
      id: "buttonContained"
    }, "Button Contained");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained raised Button', function () {
    var element = _react2.default.createElement(_.Button, {
      contained: true,
      id: "buttonContainedRaised",
      raised: true
    }, "Button Contained and Raised");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', function () {
    var element = _react2.default.createElement(_.Button, {
      disabled: true,
      id: "exampleColor"
    }, "Disabled button");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Button Component base with style', function () {
  it('should return a Button with bg and color', function () {
    var element = _react2.default.createElement(_.Button, {
      bg: "green",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', function () {
    var element = _react2.default.createElement(_.Button, {
      bg: "green",
      bgActiveColor: "green.light",
      bgHoverColor: "green.dark",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', function () {
    var element = _react2.default.createElement(_.Button, {
      id: "exampleColor",
      sm: true
    }, "Do this");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', function () {
    var element = _react2.default.createElement(_.Button, {
      id: "exampleColor",
      lg: true
    }, "Do this");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a string', function () {
    var element = _react2.default.createElement(_.Button, {
      zIndex: "500"
    }, "Do this");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', function () {
    var element = _react2.default.createElement(_.Button, {
      zIndex: 500
    }, "Do this");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', function () {
    var element = _react2.default.createElement(_.Button, {
      href: "https://www.google.com/",
      target: "_blank"
    }, "google");

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', function () {
    var element = _react2.default.createElement(_reactRouterDom.MemoryRouter, null, _react2.default.createElement(_.Button, {
      to: "/404"
    }, "404"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Button using theme colors', function () {
  it('should return a Button', function () {
    var globalStyles = (0, _globalStyles.getGlobalStyles)();
    var colors = globalStyles.colors;
    var theme = {
      colors: _objectSpread({}, colors, {
        yellow: {
          base: 'hsl(65, 65%, 50%)',
          dark: 'hsl(65, 65%, 25%)',
          light: 'hsl(65, 65%, 68%)'
        }
      }),
      space: [0, 4, 8, 16]
    };

    var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2.default.createElement(_.Button, {
      bg: "yellow",
      color: "yellow.dark"
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Button using styled system fontSize', function () {
    it('should return a Button with specified font size', function () {
      var element = _react2.default.createElement(_.Button, {
        fontSize: 3,
        variant: "primary"
      }, "Do this");

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles', function () {
  var theme = {
    buttons: _objectSpread({}, (0, _styledHelpers.buttonThemes)()),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to primary', function () {
    it('should return a Button with primary styling', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', function () {
    it('should return a Button with danger styling', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', function () {
    it('should return a Button with contained-light styling', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "contained-light"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', function () {
    it('should return a Button with contained-danger styling', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', function () {
    it('should return a Button with no variant styling', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "not-a-variant"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', function () {
    it('should return a Button with bg and color styling preserved', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', function () {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark",
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles with theme colors', function () {
  var props = {
    theme: {
      colors: {
        brandPrimary: {
          base: 'hsl(323.31, 85.61%, 29.98%)',
          dark: 'hsl(302.91, 34.91%, 24.71%)',
          light: 'hsl(312.81, 68.81%, 48.51%)'
        }
      }
    }
  };
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var theme = {
    buttons: _objectSpread({}, (0, _styledHelpers.buttonThemes)(null, globalOverrides)),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to contained-primary', function () {
    it('should return a Button with contained-primary styling based on theme.colors', function () {
      var element = _react2.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2.default.createElement(_.Button, {
        variant: "contained-primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});