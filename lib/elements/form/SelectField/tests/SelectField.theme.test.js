"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

var colorOptions = [{
  color: '#FF5630',
  label: 'Red',
  value: 'red'
}, {
  color: '#FFC400',
  label: 'Yellow',
  value: 'yellow'
}, {
  color: '#36B37E',
  label: 'Green',
  value: 'green'
}];
describe('SelectField using Theme color', function () {
  it('should return a SelectField object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.SelectField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      controlId: "exampleControl",
      id: "exampleControl",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField using Theme Font Family', function () {
  it('should return a SelectField object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.SelectField, {
      controlId: "exampleControl",
      fontFamily: "trueSpace",
      id: "exampleControl",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField using custom brand colors', function () {
  it('should return a SelectField object with custom brand primary color', function () {
    var theme = {
      colors: {
        brandLink: {
          base: 'hsl(100, 84.6%, 28%)',
          dark: 'hsl(105, 33.9%, 23.7%)',
          light: 'hsl(113, 67.8%, 47.5%)'
        },
        brandLinkHover: {
          base: 'hsl(100, 84.6%, 38%)',
          dark: 'hsl(105, 33.9%, 33.7%)',
          light: 'hsl(113, 67.8%, 57.5%)'
        }
      },
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.SelectField, {
      labelText: "Color",
      name: "selectColor",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});