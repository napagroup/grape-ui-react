"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _form = require("../../../../elements/form");

require("jest-styled-components");

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
describe('Form Component base', function () {
  it('should return a Form object', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, {
      display: "flex",
      flexDirection: "column"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with div that do not get formStyle="filled"', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/_react2["default"].createElement("div", {
      id: "1"
    })));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object and textField with filled formStyle', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/_react2["default"].createElement(_form.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name"
    })));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with filled formStyle and textField with outlined', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/_react2["default"].createElement(_form.TextField, {
      controlId: "exampleFullName",
      formStyle: "outlined",
      labelText: "Full name"
    })));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with 2 filled formStyle with 2 textField and 1 SelectField', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_form.Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/_react2["default"].createElement(_form.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name"
    }), /*#__PURE__*/_react2["default"].createElement(_form.TextField, {
      controlId: "address",
      labelText: "Address"
    }), /*#__PURE__*/_react2["default"].createElement(_form.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    })));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});