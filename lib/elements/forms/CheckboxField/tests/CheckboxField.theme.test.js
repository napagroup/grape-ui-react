"use strict";

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

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

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.CheckboxField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

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

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.CheckboxField, {
      controlId: "checkbox",
      fontFamily: "trueSpace",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a CheckboxField object with a custom base font family defined', function () {
    var theme = {
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.CheckboxField, {
      color: "red",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      sm: true,
      value: selectedValue
    }, "This should be Nunito and red"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});