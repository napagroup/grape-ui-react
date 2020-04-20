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

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { typography } from 'src/utils/styledHelpers';
export var defaultTableStylesPropsToTrim = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_Object$keys(propTypes.border)), _toConsumableArray(_Object$keys(propTypes.layout)), _toConsumableArray(_Object$keys(propTypes.space)));

var defaultTableStylesBasePropTypes = _objectSpread({}, propTypes.border, {}, propTypes.layout, {}, propTypes.space);

export var defaultTableStripedPropTypes = {
  even: PropTypes.shape({
    bg: PropTypes.string
  }),
  odd: PropTypes.shape({
    bg: PropTypes.string
  })
};
export var tablePropTypes = _objectSpread({}, typography.propTypes, {}, defaultTableStylesBasePropTypes);
export var tableBodyPropTypes = {};
export var tableCellPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, propTypes.fontWeight);
export var tableHeadPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, propTypes.fontWeight);
export var tableHeaderPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);
export var tableResponsiveWrapperPropTypes = {};
export var tableRowPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);
export var tableWrapperPropTypes = _objectSpread({}, typography.propTypes, {}, propTypes.border);