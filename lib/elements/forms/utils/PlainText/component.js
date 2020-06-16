"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.PlainTextComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const isArrayOptionsValue = value => !!value && (0, _isArray.default)(value);

const getDisplayValue = props => {
  const value = props.value;

  if (isArrayOptionsValue(value)) {
    return (0, _map.default)(value).call(value, e => e.label).join(', ');
  }

  if (!!value && !!value.label) {
    return value.label;
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
};

const propsToTrim = ['labelText', ...(0, _keys.default)(_styledHelpers.control.propTypes), ...(0, _keys.default)(_styledHelpers.spaceProps.propTypes), ...(0, _keys.default)(_styledHelpers.typography.propTypes), 'value'];

const PlainTextComponent = props => {
  const displayString = getDisplayValue(props);
  return /*#__PURE__*/_react.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), /*#__PURE__*/_react.default.createElement("div", null, displayString));
};

exports.PlainTextComponent = PlainTextComponent;
PlainTextComponent.propTypes = _objectSpread({}, _styledHelpers.control.propTypes, {}, _styledHelpers.typography.propTypes, {
  value: _propTypes.default.any
});
PlainTextComponent.defaultProps = {
  value: null
};