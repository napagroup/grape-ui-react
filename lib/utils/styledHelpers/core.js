import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { borderRadius, color, fontFamily, fontSize, letterSpacing, lineHeight, textAlign } from 'styled-system';
import { getGlobalOverrides } from 'src/global-styles';
import { defaultStylesBase } from './cssDefaults';
import { resolveColor, resolveFontFamily, scaleFont, scaleFactor, resolveBorderRadius } from './utils';
export var borderRadiusCore = function borderRadiusCore(props) {
  var nextGlobalOverrides = getGlobalOverrides(props);

  var nextProps = _objectSpread({}, props, {
    borderRadius: resolveBorderRadius(props, nextGlobalOverrides)
  });

  return borderRadius(nextProps);
};
export var colorCore = function colorCore(props) {
  var nextProps = null;
  var nextGlobalOverrides = getGlobalOverrides(props);

  if (props.variant) {
    nextProps = _objectSpread({}, props, {
      backgroundColor: resolveColor(props.bg, nextGlobalOverrides, null),
      bg: resolveColor(props.bg, nextGlobalOverrides, null),
      color: resolveColor(props.color, nextGlobalOverrides, null)
    });
  } else {
    nextProps = _objectSpread({}, props, {
      backgroundColor: resolveColor(props.bg, nextGlobalOverrides, defaultStylesBase.bg),
      bg: resolveColor(props.bg, nextGlobalOverrides, defaultStylesBase.bg),
      color: resolveColor(props.color, nextGlobalOverrides)
    });
  }

  return color(nextProps);
};
export var fontSizeCore = function fontSizeCore(props) {
  var value = props.fontSize || defaultStylesBase.fontSize;
  var scaleValue = scaleFactor(props);

  if (scaleValue) {
    value = scaleValue ? scaleFont(value, scaleValue, 1, 'rem') : value;
  }

  var nextProps = _objectSpread({}, props, {
    fontSize: value
  });

  return fontSize(nextProps);
};
export var fontFamilyCore = function fontFamilyCore(props) {
  var defaultValue = resolveFontFamily(defaultStylesBase.fontFamily);
  var value = defaultValue;

  if (props && props.fontFamily) {
    var nextGlobalOverrides = getGlobalOverrides(props);
    value = resolveFontFamily(props.fontFamily, nextGlobalOverrides, defaultValue);
  }

  var nextProps = _objectSpread({}, props, {
    fontFamily: value
  });

  return fontFamily(nextProps);
};
export var letterSpacingCore = function letterSpacingCore(props) {
  return letterSpacing(_objectSpread({}, props, {
    letterSpacing: props.kerning || defaultStylesBase.kerning
  }));
};
export var lineHeightCore = function lineHeightCore(props) {
  return lineHeight(_objectSpread({}, props, {
    lineHeight: props.lineHeight || defaultStylesBase.lineHeight
  }));
};
export var fontStyleCore = function fontStyleCore(props) {
  return "".concat(props.italic ? 'font-style: italic;' : '');
};
export var textAlignCore = function textAlignCore(props) {
  return textAlign(_objectSpread({}, props, {
    textAlign: props.textAlign || defaultStylesBase.textAlign
  }));
};
export var textDecorationCore = function textDecorationCore(props) {
  return "text-decoration: ".concat(props.textDecoration || defaultStylesBase.textDecoration, ";");
};
export var ellipsisCore = function ellipsisCore(props) {
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