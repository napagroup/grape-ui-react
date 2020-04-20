import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { border, compose, layout, position, space } from 'styled-system';
import { defaultStylesBase, resolveColor } from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';
var globalOverrides = getGlobalOverrides();
export var defaultTableStylesBase = compose(border, layout, position, space);
export var defaultTableProps = {
  width: 1
};
export var defaultTableBodyProps = {};
export var defaultTableCellProps = _objectSpread({}, defaultStylesBase, {
  borderBottomColor: resolveColor('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  px: [2, 3],
  py: 2,
  verticalAlign: 'top'
});
export var defaultTableHeadProps = _objectSpread({}, defaultStylesBase, {
  borderBottomColor: resolveColor('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontWeight: 'bold',
  px: [2, 3],
  py: 2,
  verticalAlign: 'bottom'
});
export var defaultTableHeaderProps = {};
export var defaultTableResponsiveWrapperProps = {
  overflowX: 'auto'
};
export var defaultTableRowProps = {};
export var defaultTableStripedProps = {
  even: {
    bg: 'white'
  },
  odd: {
    bg: 'white.dark'
  }
};
export var defaultTableWrapperProps = {
  borderColor: resolveColor('white.dark', globalOverrides),
  borderRadius: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  mb: 1,
  width: 1
};