import "core-js/modules/es.array.join";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, spaceProps, typography } from 'src/utils/styledHelpers';

var isArrayOptionsValue = function isArrayOptionsValue(value) {
  return !!value && _Array$isArray(value);
};

var getDisplayValue = function getDisplayValue(props) {
  var value = props.value;

  if (isArrayOptionsValue(value)) {
    return _mapInstanceProperty(value).call(value, function (e) {
      return e.label;
    }).join(', ');
  }

  if (!!value && !!value.label) {
    return value.label;
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
};

var propsToTrim = _concatInstanceProperty(_context = ['labelText']).call(_context, _toConsumableArray(_Object$keys(control.propTypes)), _toConsumableArray(_Object$keys(spaceProps.propTypes)), _toConsumableArray(_Object$keys(typography.propTypes)), ['value']);

export var PlainTextComponent = function PlainTextComponent(props) {
  var displayString = getDisplayValue(props);
  return /*#__PURE__*/React.createElement("div", removeSomeProps(props, propsToTrim), /*#__PURE__*/React.createElement("div", null, displayString));
};
PlainTextComponent.propTypes = _objectSpread({}, control.propTypes, {}, typography.propTypes, {
  value: PropTypes.any
});
PlainTextComponent.defaultProps = {
  value: null
};