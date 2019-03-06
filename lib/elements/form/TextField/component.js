'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require('../../../utils/styledHelpers');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var propsToTrim = ['formStyle', 'plainText', 'validationError', 'email', 'password'].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var getInputType = function getInputType(props) {
  if (props.password) {
    return 'password';
  }if (props.email) {
    return 'email';
  }
  return 'text';
};
var TextInputComponent = function TextInputComponent(_ref) {
  var plainText = _ref.plainText,
      props = _objectWithoutProperties(_ref, ['plainText']);

  return _react2.default.createElement('input', _extends({ readOnly: plainText, tabIndex: plainText ? '-1' : '0', type: getInputType(props) }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)));
};
exports.TextInputComponent = TextInputComponent;
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