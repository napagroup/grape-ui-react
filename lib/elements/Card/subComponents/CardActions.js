"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getCardActions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _grid = require("../../../elements/grid");

var _Card = require("../../../elements/Card");

const getCardActions = ({
  cardActions,
  cardActionsProps,
  cardActionsLeft,
  cardActionsLeftProps,
  cardActionsRight,
  cardActionsRightProps,
  cardPadding
}) => {
  if (cardActions || cardActionsLeft) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card.Actions, (0, _extends2.default)({
      justifyContent: "space-between",
      pb: cardPadding
    }, cardActionsProps), cardActions, /*#__PURE__*/_react.default.createElement(_grid.Box, cardActionsLeftProps, cardActionsLeft), /*#__PURE__*/_react.default.createElement(_grid.Box, cardActionsRightProps, cardActionsRight));
  }

  if (cardActionsRight) {
    return /*#__PURE__*/_react.default.createElement(_Card.Card.Actions, (0, _extends2.default)({
      justifyContent: "flex-end",
      pb: cardPadding
    }, cardActionsProps), /*#__PURE__*/_react.default.createElement(_grid.Box, cardActionsRightProps, cardActionsRight));
  }

  return '';
};

exports.getCardActions = getCardActions;