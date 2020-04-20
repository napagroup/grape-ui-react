export var CSS_INHERIT_VALUE = 'inherit';
export var POSITION_DEFAULT_VALUE = 'relative';
export var CSS_DEFAULT_FONT_FAMILY_VALUE = 'base';
import { getGlobalStyles } from 'src/global-styles';

var _getGlobalStyles = getGlobalStyles(),
    gridSchema = _getGlobalStyles.grid;

export var defaultStylesBase = {
  bg: 'transparent',
  color: CSS_INHERIT_VALUE,
  ellipsis: false,
  fontFamily: CSS_DEFAULT_FONT_FAMILY_VALUE,
  fontSize: CSS_INHERIT_VALUE,
  fontWeight: CSS_INHERIT_VALUE,
  italic: false,
  kerning: CSS_INHERIT_VALUE,
  lg: false,
  lineHeight: 1.5,
  sm: false,
  textAlign: CSS_INHERIT_VALUE,
  textDecoration: CSS_INHERIT_VALUE
};
export var defaultControlStyles = {
  activeColor: 'brandPrimary',
  bg: 'white.light',
  borderColor: 'borderColor',
  fontFamily: CSS_DEFAULT_FONT_FAMILY_VALUE,
  isFocused: false,
  isRequired: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false
};