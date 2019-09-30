"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

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

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', function () {
    var selectedValue = ['red'];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      disabled: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', function () {
    var selectedValue = ['red'];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with assistive text', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent with assistive text', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      assistiveText: "Tell me your color",
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      required: true,
      value: ""
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with required', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent required', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      required: true,
      value: ""
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with validationError', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent validationError', function () {
    var selectedValue = ['red'];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      assistiveText: "",
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      required: true,
      validationError: "This is required",
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 1 plaintext', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', function () {
    var selectedValue = colorOptions[0];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      assistiveText: "Please select one",
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 2 plaintext', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', function () {
    var selectedValue = [colorOptions[0], colorOptions[1]];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', function () {
    var selectedValue = ['red'];

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});