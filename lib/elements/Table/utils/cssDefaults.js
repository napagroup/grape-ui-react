"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.defaultTableWrapperProps = exports.defaultTableStripedProps = exports.defaultTableRowProps = exports.defaultTableResponsiveWrapperProps = exports.defaultTableHeaderProps = exports.defaultTableHeadProps = exports.defaultTableCellProps = exports.defaultTableBodyProps = exports.defaultTableProps = exports.defaultTableStylesBase = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const globalOverrides = (0, _globalStyles.getGlobalOverrides)();
const defaultTableStylesBase = (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
exports.defaultTableStylesBase = defaultTableStylesBase;
const defaultTableProps = {
  width: 1
};
exports.defaultTableProps = defaultTableProps;
const defaultTableBodyProps = {};
exports.defaultTableBodyProps = defaultTableBodyProps;

const defaultTableCellProps = _objectSpread(_objectSpread({}, _styledHelpers.defaultStylesBase), {}, {
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  px: [2, 3],
  py: 2,
  verticalAlign: 'top'
});

exports.defaultTableCellProps = defaultTableCellProps;

const defaultTableHeadProps = _objectSpread(_objectSpread({}, _styledHelpers.defaultStylesBase), {}, {
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontWeight: 'bold',
  px: [2, 3],
  py: 2,
  verticalAlign: 'bottom'
});

exports.defaultTableHeadProps = defaultTableHeadProps;
const defaultTableHeaderProps = {};
exports.defaultTableHeaderProps = defaultTableHeaderProps;
const defaultTableResponsiveWrapperProps = {
  overflowX: 'auto'
};
exports.defaultTableResponsiveWrapperProps = defaultTableResponsiveWrapperProps;
const defaultTableRowProps = {};
exports.defaultTableRowProps = defaultTableRowProps;
const defaultTableStripedProps = {
  even: {
    bg: 'white'
  },
  odd: {
    bg: 'white.dark'
  }
};
exports.defaultTableStripedProps = defaultTableStripedProps;
const defaultTableWrapperProps = {
  borderColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderRadius: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  mb: 1,
  width: 1
};
exports.defaultTableWrapperProps = defaultTableWrapperProps;