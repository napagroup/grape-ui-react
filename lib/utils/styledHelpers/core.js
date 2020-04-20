"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ellipsisCore = exports.textDecorationCore = exports.textAlignCore = exports.fontStyleCore = exports.lineHeightCore = exports.letterSpacingCore = exports.fontFamilyCore = exports.fontSizeCore = exports.colorCore = exports.borderRadiusCore = void 0;

var _styledSystem = require("styled-system");

var _globalStyles = require("../../global-styles");

var _cssDefaults = require("./cssDefaults");

var _utils = require("./utils");

const borderRadiusCore = props => {
  const nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const nextProps = { ...props,
    borderRadius: (0, _utils.resolveBorderRadius)(props, nextGlobalOverrides)
  };
  return (0, _styledSystem.borderRadius)(nextProps);
};

exports.borderRadiusCore = borderRadiusCore;

const colorCore = props => {
  let nextProps = null;
  const nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  if (props.variant) {
    nextProps = { ...props,
      backgroundColor: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, null),
      bg: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, null),
      color: (0, _utils.resolveColor)(props.color, nextGlobalOverrides, null)
    };
  } else {
    nextProps = { ...props,
      backgroundColor: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, _cssDefaults.defaultStylesBase.bg),
      bg: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, _cssDefaults.defaultStylesBase.bg),
      color: (0, _utils.resolveColor)(props.color, nextGlobalOverrides)
    };
  }

  return (0, _styledSystem.color)(nextProps);
};

exports.colorCore = colorCore;

const fontSizeCore = props => {
  let value = props.fontSize || _cssDefaults.defaultStylesBase.fontSize;
  const scaleValue = (0, _utils.scaleFactor)(props);

  if (scaleValue) {
    value = scaleValue ? (0, _utils.scaleFont)(value, scaleValue, 1, 'rem') : value;
  }

  const nextProps = { ...props,
    fontSize: value
  };
  return (0, _styledSystem.fontSize)(nextProps);
};

exports.fontSizeCore = fontSizeCore;

const fontFamilyCore = props => {
  const defaultValue = (0, _utils.resolveFontFamily)(_cssDefaults.defaultStylesBase.fontFamily);
  let value = defaultValue;

  if (props && props.fontFamily) {
    const nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
    value = (0, _utils.resolveFontFamily)(props.fontFamily, nextGlobalOverrides, defaultValue);
  }

  const nextProps = { ...props,
    fontFamily: value
  };
  return (0, _styledSystem.fontFamily)(nextProps);
};

exports.fontFamilyCore = fontFamilyCore;

const letterSpacingCore = props => (0, _styledSystem.letterSpacing)({ ...props,
  letterSpacing: props.kerning || _cssDefaults.defaultStylesBase.kerning
});

exports.letterSpacingCore = letterSpacingCore;

const lineHeightCore = props => (0, _styledSystem.lineHeight)({ ...props,
  lineHeight: props.lineHeight || _cssDefaults.defaultStylesBase.lineHeight
});

exports.lineHeightCore = lineHeightCore;

const fontStyleCore = props => `${props.italic ? 'font-style: italic;' : ''}`;

exports.fontStyleCore = fontStyleCore;

const textAlignCore = props => (0, _styledSystem.textAlign)({ ...props,
  textAlign: props.textAlign || _cssDefaults.defaultStylesBase.textAlign
});

exports.textAlignCore = textAlignCore;

const textDecorationCore = props => `text-decoration: ${props.textDecoration || _cssDefaults.defaultStylesBase.textDecoration};`;

exports.textDecorationCore = textDecorationCore;

const ellipsisCore = props => {
  if (props.ellipsis > 1) {
    return {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: props.ellipsis
    };
  }

  if (props.ellipsis) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  }

  return {};
};

exports.ellipsisCore = ellipsisCore;