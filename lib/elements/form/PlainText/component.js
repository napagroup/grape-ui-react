'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainTextComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledHelpers = require('../../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getDisplayValue = function getDisplayValue(props) {
  var value = props.value;

  if (!!value && !!value.label) {
    return value.label;
  }if (typeof value === 'string') {
    return value;
  }
  return '';
};

var propsToTrim = [].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['value']);
var PlainTextComponent = exports.PlainTextComponent = function PlainTextComponent(props) {
  var displayString = getDisplayValue(props);
  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.removeSomeProps)(props, propsToTrim),
    displayString
  );
};

PlainTextComponent.propTypes = Object.assign({}, _styledHelpers.control.propTypes, _styledHelpers.typography.propTypes, {
  value: _propTypes2.default.any
});

PlainTextComponent.defaultProps = {
  value: null
};