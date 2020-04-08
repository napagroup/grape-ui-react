"use strict";

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

  return component.toJSON();
};

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
describe('CheckboxFieldComponent Component base', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', function () {
    var selectedValue = ['red'];

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a CheckboxFieldComponent that contains PlainText object', function () {
    var selectedValue = ['red'];

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});