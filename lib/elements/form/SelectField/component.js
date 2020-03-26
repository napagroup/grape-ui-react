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

var _Async = require("react-select/lib/Async");

var _Async2 = _interopRequireDefault(_Async);

var _AsyncCreatable = require("react-select/lib/AsyncCreatable");

var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var propsToTrim = [].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), ['chipBg', 'formStyle', 'isCreatable', 'isDisabled', 'isFocused', 'labelText', 'menuSelectedBg', 'menuSelectedColor', 'multiple', 'styleOverrides', 'validationError']);

var SelectComponent = exports.SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

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
      return /*#__PURE__*/_react2["default"].createElement(_AsyncCreatable2["default"], _extends({
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

    return /*#__PURE__*/_react2["default"].createElement(_Async2["default"], _extends({
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
    return /*#__PURE__*/_react2["default"].createElement(_reactSelect.Creatable, _extends({
      ref: inputRef,
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styles
    }, trimmedProps), children);
  }

  return /*#__PURE__*/_react2["default"].createElement(_reactSelect2["default"], _extends({
    ref: inputRef,
    className: "grape-ui-select-container",
    classNamePrefix: "grape-ui-select",
    isDisabled: isDisabled,
    isFocused: isFocused,
    isMulti: multiple,
    styles: (0, _utils.styleOverridesBase)(props)
  }, trimmedProps), children);
};

SelectComponent.propTypes = {
  children: _propTypes2["default"].any,
  inputRef: _styledHelpers.refType,
  isAsync: _propTypes2["default"].bool,
  isCreatable: _propTypes2["default"].bool,
  isDisabled: _propTypes2["default"].bool,
  isFocused: _propTypes2["default"].bool,
  multiple: _propTypes2["default"].bool,
  styleOverrides: _propTypes2["default"].object
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