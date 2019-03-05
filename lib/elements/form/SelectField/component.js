'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require('../../../utils/styledHelpers');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
var propsToTrim = [].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), ['chipBg', 'isDisabled', 'menuFocusBg', 'menuFocusColor', 'menuSelectedBg', 'menuSelectedColor', 'multiple'], _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['validationError']);
var SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var isDisabled = props.isDisabled,
      multiple = props.multiple;

  return _react2.default.createElement(
    _reactSelect2.default,
    _extends({
      className: 'grape-ui-select-container',
      classNamePrefix: 'grape-ui-select',
      isDisabled: isDisabled,
      isMulti: multiple,
      styles: styleOverrides
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)),
    children
  );
};
exports.SelectComponent = SelectComponent;
SelectComponent.propTypes = {
  children: _propTypes2.default.any,
  isDisabled: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool
};
SelectComponent.defaultProps = {
  children: null,
  isDisabled: false,
  multiple: false
};