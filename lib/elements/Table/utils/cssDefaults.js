"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.defaultTableWrapperProps = exports.defaultTableStripedProps = exports.defaultTableRowProps = exports.defaultTableResponsiveWrapperProps = exports.defaultTableHeaderProps = exports.defaultTableHeadProps = exports.defaultTableCellProps = exports.defaultTableBodyProps = exports.defaultTableProps = exports.defaultTableStylesBase = void 0;

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

const globalOverrides = (0, _globalStyles.getGlobalOverrides)();
const defaultTableStylesBase = (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
exports.defaultTableStylesBase = defaultTableStylesBase;
const defaultTableProps = {
  width: 1
};
exports.defaultTableProps = defaultTableProps;
const defaultTableBodyProps = {};
exports.defaultTableBodyProps = defaultTableBodyProps;
const defaultTableCellProps = { ..._styledHelpers.defaultStylesBase,
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  px: [2, 3],
  py: 2,
  verticalAlign: 'top'
};
exports.defaultTableCellProps = defaultTableCellProps;
const defaultTableHeadProps = { ..._styledHelpers.defaultStylesBase,
  borderBottomColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontWeight: 'bold',
  px: [2, 3],
  py: 2,
  verticalAlign: 'bottom'
};
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