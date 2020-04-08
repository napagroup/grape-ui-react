"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoverColorButton = exports.activeColorButton = void 0;

var _styledHelpers = require("../../utils/styledHelpers");

var hasVariant = function hasVariant(variant) {
  if (!variant) {
    return false;
  }

  return !!variant;
};

var activeColorButton = function activeColorButton(props) {
  var bgActiveColor = props.bgActiveColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgActiveColor || bgActiveColor === null ? (0, _styledHelpers.resolveColor)('white.light') : (0, _styledHelpers.resolveColor)(bgActiveColor);
  return "background-color: ".concat(color);
};

exports.activeColorButton = activeColorButton;

var hoverColorButton = function hoverColorButton(props) {
  var bgHoverColor = props.bgHoverColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgHoverColor || bgHoverColor === null ? (0, _styledHelpers.resolveColor)('white.dark') : (0, _styledHelpers.resolveColor)(bgHoverColor);
  return "background-color: ".concat(color);
};

exports.hoverColorButton = hoverColorButton;