import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  > div {\n    ", "\n  }\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { fontWeight, layout, space } from 'styled-system';
import { colorCore, defaultControlStyles, defaultStylesBase, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, layoutProps, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { PlainTextComponent } from './component';

var _getGlobalStyles = getGlobalStyles(),
    gridSchema = _getGlobalStyles.grid;

var PlainTextStyledComponent = styled(PlainTextComponent)(_templateObject(), colorCore, fontFamilyCore, fontSizeCore, fontStyleCore, fontWeight, layout, letterSpacingCore, lineHeightCore, space, textAlignCore, textDecorationCore, ellipsisCore);
PlainTextStyledComponent.propTypes = _objectSpread({}, layoutProps.propTypes, {}, space.propTypes, {}, typography.propTypes);
PlainTextStyledComponent.defaultProps = _objectSpread({}, defaultStylesBase, {
  pb: gridSchema.gutter || defaultControlStyles.padding,
  pl: gridSchema.gutter || defaultControlStyles.padding,
  pr: gridSchema.gutter || defaultControlStyles.padding,
  pt: gridSchema.gutter || defaultControlStyles.padding,
  width: 1
});

var PlainText = function PlainText(props) {
  var formStyle = props.formStyle,
      pb = props.pb,
      pt = props.pt,
      otherProps = _objectWithoutProperties(props, ["formStyle", "pb", "pt"]);

  var paddingBottom = formStyle === 'filled' ? '0.5rem' : pb;
  var paddingTop = formStyle === 'filled' ? 'calc(0.7rem + 1px)' : pt;
  return /*#__PURE__*/React.createElement(PlainTextStyledComponent, _extends({
    pb: paddingBottom,
    pt: paddingTop
  }, otherProps));
};

PlainText.propTypes = _objectSpread({}, space.propTypes);
PlainText.defaultProps = {
  pb: gridSchema.gutter || defaultControlStyles.padding,
  pl: gridSchema.gutter || defaultControlStyles.padding,
  pr: gridSchema.gutter || defaultControlStyles.padding,
  pt: gridSchema.gutter || defaultControlStyles.padding
};
/** @component */

export { PlainText };