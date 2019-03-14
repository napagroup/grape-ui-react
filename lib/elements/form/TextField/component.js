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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var propsToTrim = ['formStyle', 'plainText', 'validationError', 'email', 'password'].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var getInputType = function getInputType(props) {
  if (props.password) {
    return 'password';
  }

  if (props.email) {
    return 'email';
  }

  return 'text';
};

var TextInputComponent = exports.TextInputComponent = function TextInputComponent(_ref) {
  var plainText = _ref.plainText,
      props = _objectWithoutProperties(_ref, ["plainText"]);

  return _react2.default.createElement("input", _extends({
    readOnly: plainText,
    tabIndex: plainText ? '-1' : '0',
    type: getInputType(props)
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};

TextInputComponent.propTypes = {
  email: _propTypes2.default.bool,
  password: _propTypes2.default.bool,
  plainText: _propTypes2.default.bool
};
TextInputComponent.defaultProps = {
  email: false,
  password: false,
  plainText: false
};