"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PlainTextComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

const isArrayOptionsValue = value => !!value && (0, _isArray.default)(value);

const getDisplayValue = props => {
  const {
    value
  } = props;

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
PlainTextComponent.propTypes = { ..._styledHelpers.control.propTypes,
  ..._styledHelpers.typography.propTypes,
  value: _propTypes.default.any
};
PlainTextComponent.defaultProps = {
  value: null
};