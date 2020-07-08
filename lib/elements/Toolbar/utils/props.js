"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.toolbarDefaultProps = exports.toolbarPropTypes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _Progress = require("../../../elements/Progress");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const toolbarPropTypes = _objectSpread({}, _propTypes2.default.background, {}, _propTypes2.default.border, {}, _propTypes2.default.color, {}, _propTypes2.default.flexbox, {}, _propTypes2.default.layout, {}, _propTypes2.default.position, {}, _propTypes2.default.shadow, {}, _propTypes2.default.space, {}, _Progress.getProgressPropTypes, {
  boxSizing: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  containerComponent: _propTypes.default.node,

  /** Hides component */
  isHidden: _propTypes.default.bool,
  toolbarInnerProps: _propTypes.default.object
});

exports.toolbarPropTypes = toolbarPropTypes;

const toolbarDefaultProps = _objectSpread({}, _Progress.getProgressDefaultProps, {
  alignItems: 'center',
  boxShadow: (0, _styledHelpers.resolveBoxShadow)('01'),
  boxSizing: 'border-box',
  centerAreaProps: {
    flex: 1
  },
  containerComponent: 'header',
  display: 'flex',
  flex: 'none',
  isHidden: false,
  justifyContent: 'center',
  minHeight: [48, 5, 64],
  progressPlacement: 'bottom',
  px: [3, null, 4],
  toolbarInnerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 960,
    width: 1
  }
});

exports.toolbarDefaultProps = toolbarDefaultProps;