"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var styleOverrides = {
  control: function control(styles) {
    return null;
  },
  input: function input(styles) {
    return null;
  },
  multiValue: function multiValue(styles) {
    return null;
  },
  multiValueLabel: function multiValueLabel(styles) {
    return null;
  },
  multiValueRemove: function multiValueRemove(styles) {
    return null;
  },
  option: function option(styles) {
    return null;
  },
  placeholder: function placeholder(styles) {
    return null;
  },
  singleValue: function singleValue(styles) {
    return null;
  }
};
var propsToTrim = [].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), ['chipBg', 'formStyle', 'isCreatable', 'isDisabled', 'isFocused', 'labelText', 'menuFocusBg', 'menuFocusColor', 'menuSelectedBg', 'menuSelectedColor', 'multiple'], _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['validationError']);

var SelectComponent = exports.SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var isCreatable = props.isCreatable,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      multiple = props.multiple;

  if (isCreatable) {
    return _react2["default"].createElement(_reactSelect.Creatable, _extends({
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styleOverrides
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)), children);
  }

  return _react2["default"].createElement(_reactSelect2["default"], _extends({
    className: "grape-ui-select-container",
    classNamePrefix: "grape-ui-select",
    isDisabled: isDisabled,
    isFocused: isFocused,
    isMulti: multiple,
    styles: styleOverrides
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)), children);
};

SelectComponent.propTypes = {
  children: _propTypes2["default"].any,
  isCreatable: _propTypes2["default"].bool,
  isDisabled: _propTypes2["default"].bool,
  isFocused: _propTypes2["default"].bool,
  multiple: _propTypes2["default"].bool
};
SelectComponent.defaultProps = {
  children: null,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false
};