"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.getCardSecondaryMedia = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Card = require("../../../elements/Card");

var _utils = require("../../../elements/Card/utils");

var _grid = require("../../../elements/grid");

var _CardBody = require("./CardBody");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const getCardSecondaryMedia = props => {
  const cardActions = props.cardActions,
        cardBody = props.cardBody,
        cardPadding = props.cardPadding,
        cardSecondaryMedia = props.cardSecondaryMedia,
        cardSecondaryMediaProps = props.cardSecondaryMediaProps;

  if (cardSecondaryMedia) {
    return /*#__PURE__*/_react.default.createElement(_grid.Box, {
      pb: cardBody ? cardPadding : ''
    }, /*#__PURE__*/_react.default.createElement(_Card.Card.SecondaryMedia, (0, _extends2.default)({
      pb: cardBody || cardActions ? cardPadding : ''
    }, cardSecondaryMediaProps), cardSecondaryMedia), (0, _CardBody.getCardBody)(props));
  }

  return null;
};

exports.getCardSecondaryMedia = getCardSecondaryMedia;
getCardSecondaryMedia.propTypes = _objectSpread({}, _utils.cardActionsBasePropTypes, {}, _utils.cardBasePropTypes, {}, _utils.cardSecondaryMediaBasePropTypes);
getCardSecondaryMedia.defaultProps = _objectSpread({}, _utils.cardActionsBaseDefaultProps, {}, _utils.cardBaseDefaultProps, {}, _utils.cardSecondaryMediaBaseDefaultProps);