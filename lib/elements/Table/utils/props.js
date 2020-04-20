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

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _context;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var defaultTableStylesPropsToTrim = (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])((0, _keys["default"])(_propTypes2["default"].border)), (0, _toConsumableArray2["default"])((0, _keys["default"])(_propTypes2["default"].layout)), (0, _toConsumableArray2["default"])((0, _keys["default"])(_propTypes2["default"].space)));
exports.defaultTableStylesPropsToTrim = defaultTableStylesPropsToTrim;

var defaultTableStylesBasePropTypes = _objectSpread({}, _propTypes2["default"].border, {}, _propTypes2["default"].layout, {}, _propTypes2["default"].space);

var defaultTableStripedPropTypes = {
  even: _propTypes["default"].shape({
    bg: _propTypes["default"].string
  }),
  odd: _propTypes["default"].shape({
    bg: _propTypes["default"].string
  })
};
exports.defaultTableStripedPropTypes = defaultTableStripedPropTypes;

var tablePropTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {}, defaultTableStylesBasePropTypes);

exports.tablePropTypes = tablePropTypes;
var tableBodyPropTypes = {};
exports.tableBodyPropTypes = tableBodyPropTypes;

var tableCellPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, _propTypes2["default"].fontWeight);

exports.tableCellPropTypes = tableCellPropTypes;

var tableHeadPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes, {}, _propTypes2["default"].fontWeight);

exports.tableHeadPropTypes = tableHeadPropTypes;

var tableHeaderPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);

exports.tableHeaderPropTypes = tableHeaderPropTypes;
var tableResponsiveWrapperPropTypes = {};
exports.tableResponsiveWrapperPropTypes = tableResponsiveWrapperPropTypes;

var tableRowPropTypes = _objectSpread({}, defaultTableStylesBasePropTypes);

exports.tableRowPropTypes = tableRowPropTypes;

var tableWrapperPropTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {}, _propTypes2["default"].border);

exports.tableWrapperPropTypes = tableWrapperPropTypes;