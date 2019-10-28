"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _react3 = require("cleave.js/react");

var _react4 = _interopRequireDefault(_react3);

var _cleavePhone = require("cleave.js/dist/addons/cleave-phone.us");

var _cleavePhone2 = _interopRequireDefault(_cleavePhone);

var _reactTextareaAutosize = require("react-textarea-autosize");

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var propsToTrim = ['formStyle', 'labelText', 'plainText', 'validationError', 'currency', 'email', 'formatterOptions', 'integer', 'maxRows', 'multiline', 'numeric', 'password', 'phone', 'plainText', 'postalCode'].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var getInputType = function getInputType(props) {
  if (props.password) {
    return 'password';
  }

  if (props.email) {
    return 'email';
  }

  return 'text';
};

var getTabIndex = function getTabIndex(plainText) {
  return plainText ? '-1' : '0';
};

var TextInputComponent = exports.TextInputComponent = function TextInputComponent(_ref) {
  var maxRows = _ref.maxRows,
      multiline = _ref.multiline,
      plainText = _ref.plainText,
      props = _objectWithoutProperties(_ref, ["maxRows", "multiline", "plainText"]);

  if ((0, _utils.isCleaveInput)(props)) {
    return _react2["default"].createElement(_react4["default"], _extends({
      autoComplete: "no",
      options: (0, _utils.cleaveOption)(props),
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
  }

  if (multiline) {
    return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("div", {
      className: "multiline-scroll-shield"
    }), _react2["default"].createElement(_reactTextareaAutosize2["default"], _extends({
      maxRows: maxRows,
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim))));
  }

  return _react2["default"].createElement("input", _extends({
    readOnly: plainText,
    tabIndex: getTabIndex(plainText),
    type: getInputType(props)
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};

TextInputComponent.propTypes = {
  email: _propTypes2["default"].bool,
  maxRows: _propTypes2["default"].number,
  multiline: _propTypes2["default"].bool,
  password: _propTypes2["default"].bool,
  plainText: _propTypes2["default"].bool
};
TextInputComponent.defaultProps = {
  email: false,
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false
};