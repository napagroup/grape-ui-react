"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CardComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _grid = require("../../elements/grid");

var _componentHelpers = require("../../utils/componentHelpers");

var _utils = require("./utils");

var _subComponents = require("./subComponents");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const CardComponent = props => {
  const cardPadding = props.cardPadding,
        cardSecondaryMedia = props.cardSecondaryMedia,
        children = props.children;
  return /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(_utils.cardPropTypes)), (0, _subComponents.getCardRichMedia)(props), /*#__PURE__*/_react.default.createElement(_subComponents.CardInner, props, /*#__PURE__*/_react.default.createElement(_subComponents.CardHeader, props), !cardSecondaryMedia ? (0, _subComponents.getCardBody)(props) : '', children ? /*#__PURE__*/_react.default.createElement(_grid.Box, {
    p: cardPadding
  }, children) : ''), (0, _subComponents.getCardSecondaryMedia)(props), (0, _subComponents.getCardActions)(props));
};

exports.CardComponent = CardComponent;
CardComponent.propTypes = _objectSpread({}, _utils.cardPropTypes);
CardComponent.defaultProps = _objectSpread({}, _utils.cardDefaultProps);