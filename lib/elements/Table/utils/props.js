"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableWrapperPropTypes = exports.tableRowPropTypes = exports.tableResponsiveWrapperPropTypes = exports.tableHeaderPropTypes = exports.tableHeadPropTypes = exports.tableCellPropTypes = exports.tableBodyPropTypes = exports.tablePropTypes = exports.defaultTableStripedPropTypes = exports.defaultTableStylesPropsToTrim = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultTableStylesPropsToTrim = [].concat(_toConsumableArray(Object.keys(_propTypes2["default"].border)), _toConsumableArray(Object.keys(_propTypes2["default"].layout)), _toConsumableArray(Object.keys(_propTypes2["default"].space)));
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