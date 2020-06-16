"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CardHeader = exports.getCardHeader = void 0;

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

var _Card = require("../../../../elements/Card");

var _utils = require("../../../../elements/Card/utils");

var _grid = require("../../../../elements/grid");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const getCardTitle = ({
  cardTitle,
  cardTitleProps
}) => {
  if (typeof cardTitle === 'object') {
    return /*#__PURE__*/_react.default.createElement(_grid.Box, cardTitleProps, cardTitle);
  }

  if (cardTitle) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card.Title, cardTitleProps, cardTitle);
  }

  return '';
};

const getCardSubtitle = ({
  cardSubtitle,
  cardSubtitleProps
}) => {
  if (typeof cardSubtitle === 'object') {
    return /*#__PURE__*/_react.default.createElement(_grid.Box, cardSubtitleProps, cardSubtitle);
  }

  if (cardSubtitle) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card.Subtitle, cardSubtitleProps, cardSubtitle);
  }

  return '';
};

const getCardThumbnail = ({
  cardPadding,
  cardThumbnail,
  cardThumbnailProps
}) => {
  if (cardThumbnail) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card.Thumbnail, (0, _extends2.default)({
      pr: cardPadding
    }, cardThumbnailProps), cardThumbnail);
  }

  return '';
};

const getPaddingBottom = ({
  cardPadding,
  cardSubtitle,
  cardThumbnail,
  cardTitle
}) => {
  if (!cardTitle && !cardSubtitle && !cardThumbnail) {
    return '';
  }

  return cardPadding;
};

const getCardHeader = ({
  cardSubtitle,
  cardThumbnail,
  cardTitle
}) => {
  if (cardSubtitle || cardThumbnail || cardTitle) {
    return true;
  }

  return false;
};

exports.getCardHeader = getCardHeader;

const CardHeader = props => {
  const cardBody = props.cardBody,
        cardHeaderProps = props.cardHeaderProps,
        cardPadding = props.cardPadding,
        cardSecondaryMedia = props.cardSecondaryMedia,
        cardTitleContainerProps = props.cardTitleContainerProps;
  return /*#__PURE__*/_react.default.createElement(_grid.Flex, (0, _extends2.default)({
    alignItems: "center",
    pb: !cardBody && !cardSecondaryMedia ? '' : getPaddingBottom(props),
    pt: getCardHeader(props) ? cardPadding : ''
  }, cardHeaderProps), getCardThumbnail(props), /*#__PURE__*/_react.default.createElement(_grid.Box, cardTitleContainerProps, getCardTitle(props), getCardSubtitle(props)));
};

exports.CardHeader = CardHeader;
CardHeader.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils.cardBasePropTypes), _utils.cardBodyBasePropTypes), _utils.cardHeaderBasePropTypes), _utils.cardSecondaryMediaBasePropTypes);
CardHeader.defaultProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils.cardBaseDefaultProps), _utils.cardBodyBaseDefaultProps), _utils.cardHeaderBaseDefaultProps), _utils.cardSecondaryMediaBaseDefaultProps);