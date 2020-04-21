"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SelectComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _async = _interopRequireDefault(require("react-select/async"));

var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));

var _utils = require("./utils");

var _context;

var propsToTrim = (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])((0, _keys["default"])(_styledHelpers.control.propTypes)), ['chipBg', 'formStyle', 'isCreatable', 'isDisabled', 'isFocused', 'labelText', 'menuSelectedBg', 'menuSelectedColor', 'multiple', 'styleOverrides', 'validationError']);

var SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  var inputRef = props.inputRef,
      isAsync = props.isAsync,
      isCreatable = props.isCreatable,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      multiple = props.multiple;
  var styles = (0, _utils.styleOverridesBase)(props);
  var trimmedProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);

  if (isAsync) {
    if (isCreatable) {
      return /*#__PURE__*/_react["default"].createElement(_asyncCreatable["default"], (0, _extends2["default"])({
        ref: inputRef,
        className: "grape-ui-select-container",
        classNamePrefix: "grape-ui-select",
        isDisabled: isDisabled,
        isFocused: isFocused,
        isMulti: multiple,
        styles: styles
      }, trimmedProps, {
        isClearable: true
      }), children);
    }

    return /*#__PURE__*/_react["default"].createElement(_async["default"], (0, _extends2["default"])({
      ref: inputRef,
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styles
    }, trimmedProps, {
      isClearable: true
    }), children);
  }

  if (isCreatable) {
    return /*#__PURE__*/_react["default"].createElement(_creatable["default"], (0, _extends2["default"])({
      ref: inputRef,
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styles
    }, trimmedProps), children);
  }

  return /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], (0, _extends2["default"])({
    ref: inputRef,
    className: "grape-ui-select-container",
    classNamePrefix: "grape-ui-select",
    isDisabled: isDisabled,
    isFocused: isFocused,
    isMulti: multiple,
    styles: (0, _utils.styleOverridesBase)(props)
  }, trimmedProps), children);
};

exports.SelectComponent = SelectComponent;
SelectComponent.propTypes = {
  children: _propTypes["default"].any,
  inputRef: _styledHelpers.refType,
  isAsync: _propTypes["default"].bool,
  isCreatable: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  multiple: _propTypes["default"].bool,
  styleOverrides: _propTypes["default"].object
};
SelectComponent.defaultProps = {
  children: null,
  inputRef: function inputRef() {},
  isAsync: false,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
  styleOverrides: {}
};