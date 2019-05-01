"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainTextComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isArrayOptionsValue = function isArrayOptionsValue(value) {
  return !!value && Array.isArray(value);
};

var getDisplayValue = function getDisplayValue(props) {
  var value = props.value;

  if (isArrayOptionsValue(value)) {
    return value.map(function (e) {
      return e.label;
    }).join(',');
  }

  if (!!value && !!value.label) {
    return value.label;
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
};

var propsToTrim = ['labelText'].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['value']);

var PlainTextComponent = exports.PlainTextComponent = function PlainTextComponent(props) {
  var displayString = getDisplayValue(props);
  return _react2.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), displayString);
};

PlainTextComponent.propTypes = _objectSpread({}, _styledHelpers.control.propTypes, _styledHelpers.typography.propTypes, {
  value: _propTypes2.default.any
});
PlainTextComponent.defaultProps = {
  value: null
};