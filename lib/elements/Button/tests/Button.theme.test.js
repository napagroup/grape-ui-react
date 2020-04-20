import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getGlobalOverrides } from 'src/global-styles';
import { buttonThemes } from 'src/utils/styledHelpers';
import { Button } from '..';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
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
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
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
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Button, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
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
  var globalOverrides = getGlobalOverrides(props);

  var theme = _objectSpread({
    space: [0, 4, 8, 16]
  }, globalOverrides);

  describe('Button', function () {
    it('should return a Button with lg border radius styling based on theme.border.borderRadius', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        lg: true
      }, "Custom lg button"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles', function () {
  var theme = {
    buttons: _objectSpread({}, buttonThemes()),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to primary', function () {
    it('should return a Button with primary styling', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "primary"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', function () {
    it('should return a Button with danger styling', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "danger"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', function () {
    it('should return a Button with contained-light styling', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "contained-light"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', function () {
    it('should return a Button with contained-danger styling', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "contained-danger"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', function () {
    it('should return a Button with no variant styling', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "not-a-variant"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', function () {
    it('should return a Button with bg and color styling preserved', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        bg: "yellow",
        color: "yellow.dark"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', function () {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
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
  var globalOverrides = getGlobalOverrides(props);
  var theme = {
    buttons: _objectSpread({}, buttonThemes(null, globalOverrides)),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to contained-primary', function () {
    it('should return a Button with contained-primary styling based on theme.colors', function () {
      var element = /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "contained-primary"
      }, "Do this"));
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});