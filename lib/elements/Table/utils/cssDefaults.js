"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTableWrapperProps = exports.defaultTableStripedProps = exports.defaultTableRowProps = exports.defaultTableResponsiveWrapperProps = exports.defaultTableHeaderProps = exports.defaultTableHeadProps = exports.defaultTableCellProps = exports.defaultTableBodyProps = exports.defaultTableProps = exports.defaultTableStylesBase = void 0;

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var globalOverrides = (0, _globalStyles.getGlobalOverrides)();
var defaultTableStylesBase = (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
exports.defaultTableStylesBase = defaultTableStylesBase;
var defaultTableProps = {
  width: 1
};
exports.defaultTableProps = defaultTableProps;
var defaultTableBodyProps = {};
exports.defaultTableBodyProps = defaultTableBodyProps;

var defaultTableCellProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  px: [2, 3],
  py: 2,
  verticalAlign: 'top'
});

exports.defaultTableCellProps = defaultTableCellProps;

var defaultTableHeadProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontWeight: 'bold',
  px: [2, 3],
  py: 2,
  verticalAlign: 'bottom'
});

exports.defaultTableHeadProps = defaultTableHeadProps;
var defaultTableHeaderProps = {};
exports.defaultTableHeaderProps = defaultTableHeaderProps;
var defaultTableResponsiveWrapperProps = {
  overflowX: 'auto'
};
exports.defaultTableResponsiveWrapperProps = defaultTableResponsiveWrapperProps;
var defaultTableRowProps = {};
exports.defaultTableRowProps = defaultTableRowProps;
var defaultTableStripedProps = {
  even: {
    bg: 'white'
  },
  odd: {
    bg: 'white.dark'
  }
};
exports.defaultTableStripedProps = defaultTableStripedProps;
var defaultTableWrapperProps = {
  borderColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderRadius: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  mb: 1,
  width: 1
};
exports.defaultTableWrapperProps = defaultTableWrapperProps;