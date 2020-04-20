import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { colorCore, defaultStylesBase, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { ParagraphComponent } from './component';

var _getGlobalStyles = getGlobalStyles(),
    gridSchema = _getGlobalStyles.grid;

var fontSizeParagraph = function fontSizeParagraph(props) {
  var lead = props.lead;
  return lead ? fontSizeCore(_objectSpread({}, props, {
    lg: true
  })) : fontSizeCore(props);
};

var fontWeightParagraph = function fontWeightParagraph(props) {
  var lead = props.lead;
  return lead ? fontWeight(_objectSpread({}, props, {
    fontWeight: '300'
  })) : fontWeight(props);
};

var Paragraph = styled(ParagraphComponent)(_templateObject(), colorCore, ellipsisCore, fontFamilyCore, fontSizeParagraph, fontWeightParagraph, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, space);
Paragraph.propTypes = _objectSpread({}, typography.propTypes, {
  /** Use the lead font size */
  lead: PropTypes.bool
});
Paragraph.defaultProps = _objectSpread({}, defaultStylesBase, {
  lead: false,
  mb: gridSchema.gutter,
  mt: 0
});
/** @component */

export { Paragraph };