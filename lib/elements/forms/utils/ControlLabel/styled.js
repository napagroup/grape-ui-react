import "core-js/modules/es.number.to-fixed";
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
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { fontWeight, layout, position, space } from 'styled-system';
import { colorCore, defaultStylesBase, defaultControlStyles, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { ControlLabelComponent } from './component';

var _getGlobalStyles = getGlobalStyles(),
    fontSizeSchema = _getGlobalStyles.fontSize;

var colorLabel = function colorLabel(props) {
  return colorCore(_objectSpread({}, props, {
    color: !props.validationError ? props.color : 'brandDanger'
  }));
};

var fontSizeLabel = function fontSizeLabel(props) {
  return fontSizeCore(_objectSpread({}, props, {
    sm: true
  }));
};

var ControlLabel = styled(ControlLabelComponent)(_templateObject(), colorLabel, ellipsisCore, fontFamilyCore, fontSizeLabel, fontStyleCore, fontWeight, layout, letterSpacingCore, lineHeightCore, position, space, textAlignCore, textDecorationCore);
ControlLabel.propTypes = _objectSpread({
  /** Background of the label component.  For 'outlined' styled controls, this assures that the label is making space on the control's border. */
  bg: PropTypes.string,

  /** When true, this will change the label text color to the control disabled color. */
  disabled: PropTypes.bool
}, typography.propTypes, {
  /** When true, this will change the label text color to brandDanger. */
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});
ControlLabel.defaultProps = _objectSpread({}, defaultStylesBase, {
  bg: defaultControlStyles.bg,
  disabled: false,
  height: "".concat((fontSizeSchema.sizeVariants.sm / 1.5).toFixed(1), "rem"),
  left: 2,
  lineHeight: 0.8,
  position: 'absolute',
  px: 2,
  top: '-1px',
  validationError: ''
});
/** @component */

export { ControlLabel };