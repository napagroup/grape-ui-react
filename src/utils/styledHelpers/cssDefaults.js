export const CSS_INHERIT_VALUE = 'inherit';
export const POSITION_DEFAULT_VALUE = 'relative';
export const CSS_DEFAULT_FONT_FAMILY_VALUE = 'base';

import { getGlobalStyles } from 'src/global-styles';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const defaultStylesBase = {
  bg: 'transparent',
  borderRadius: borderSchema.borderRadius.base,
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
  textDecoration: CSS_INHERIT_VALUE,
};
export const defaultControlStyles = {
  activeColor: 'brandPrimary',
  bg: 'white.light',
  borderColor: 'borderColor',
  borderRadius: borderSchema.borderRadius.base,
  fontFamily: CSS_DEFAULT_FONT_FAMILY_VALUE,
  isFocused: false,
  isRequired: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false,
};
