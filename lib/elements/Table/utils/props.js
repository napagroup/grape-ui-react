"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.tableWrapperPropTypes = exports.tableRowPropTypes = exports.tableResponsiveWrapperPropTypes = exports.tableHeaderPropTypes = exports.tableHeadPropTypes = exports.tableCellPropTypes = exports.tableBodyPropTypes = exports.tablePropTypes = exports.defaultTableStripedPropTypes = exports.defaultTableStylesPropsToTrim = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const defaultTableStylesPropsToTrim = [...(0, _keys.default)(_propTypes2.default.border), ...(0, _keys.default)(_propTypes2.default.layout), ...(0, _keys.default)(_propTypes2.default.space)];
exports.defaultTableStylesPropsToTrim = defaultTableStylesPropsToTrim;

const defaultTableStylesBasePropTypes = _objectSpread({}, _propTypes2.default.border, {}, _propTypes2.default.layout, {}, _propTypes2.default.space);

const defaultTableStripedPropTypes = {
  even: _propTypes.default.shape({
    bg: _propTypes.default.string
  }),
  odd: _propTypes.default.shape({
    bg: _propTypes.default.string
  })
};
exports.defaultTableStripedPropTypes = defaultTableStripedPropTypes;

const tablePropTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {}, defaultTableStylesBasePropTypes);

exports.tablePropTypes = tablePropTypes;
const tableBodyPropTypes = {};
exports.tableBodyPropTypes = tableBodyPropTypes;

const tableCellPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, _propTypes2.default.fontWeight);

exports.tableCellPropTypes = tableCellPropTypes;

const tableHeadPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, _propTypes2.default.fontWeight);

exports.tableHeadPropTypes = tableHeadPropTypes;

const tableHeaderPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);

exports.tableHeaderPropTypes = tableHeaderPropTypes;
const tableResponsiveWrapperPropTypes = {};
exports.tableResponsiveWrapperPropTypes = tableResponsiveWrapperPropTypes;

const tableRowPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);

exports.tableRowPropTypes = tableRowPropTypes;

const tableWrapperPropTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {}, _propTypes2.default.border);

exports.tableWrapperPropTypes = tableWrapperPropTypes;