"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
var selectedValue = ['red'];
describe('CheckboxField using Theme color', function () {
  it('should return a CheckboxField object with custom color', function () {
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
    }, _react2["default"].createElement(_.CheckboxField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('CheckboxField using Theme Font Family', function () {
  it('should return a CheckboxField object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "checkbox",
      fontFamily: "trueSpace",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a CheckboxField object with a custom base font family defined', function () {
    var theme = {
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.CheckboxField, {
      color: "red",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      sm: true,
      value: selectedValue
    }, "This should be Nunito and red"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});