"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

  return component.toJSON();
};

describe('Button using Theme color', function () {
  it('should return a Button object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using Theme Font Family', function () {
  it('should return a Button object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.Button, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using theme border radius', function () {
  var props = {
    theme: {
      border: {
        borderRadius: {
          base: '8px',
          lg: '12px',
          sm: '4px'
        }
      }
    }
  };
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  var theme = _objectSpread({
    space: [0, 4, 8, 16]
  }, globalOverrides);

  describe('Button', function () {
    it('should return a Button with lg border radius styling based on theme.border.borderRadius', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        lg: true
      }, "Custom lg button"));

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
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', function () {
    it('should return a Button with danger styling', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', function () {
    it('should return a Button with contained-light styling', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "contained-light"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', function () {
    it('should return a Button with contained-danger styling', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', function () {
    it('should return a Button with no variant styling', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "not-a-variant"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', function () {
    it('should return a Button with bg and color styling preserved', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', function () {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', function () {
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
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
      var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement(_.Button, {
        variant: "contained-primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});