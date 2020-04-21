"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.hoverColorButton = exports.activeColorButton = void 0;

var _styledHelpers = require("../../utils/styledHelpers");

const hasVariant = variant => {
  if (!variant) {
    return false;
  }

  return !!variant;
};

const activeColorButton = props => {
  const bgActiveColor = props.bgActiveColor,
        variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  const color = !bgActiveColor || bgActiveColor === null ? (0, _styledHelpers.resolveColor)('white.light') : (0, _styledHelpers.resolveColor)(bgActiveColor);
  return "background-color: ".concat(color);
};

exports.activeColorButton = activeColorButton;

const hoverColorButton = props => {
  const bgHoverColor = props.bgHoverColor,
        variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  const color = !bgHoverColor || bgHoverColor === null ? (0, _styledHelpers.resolveColor)('white.dark') : (0, _styledHelpers.resolveColor)(bgHoverColor);
  return "background-color: ".concat(color);
};

exports.hoverColorButton = hoverColorButton;