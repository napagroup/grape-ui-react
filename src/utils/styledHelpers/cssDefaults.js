export const CSS_INHERIT_VALUE = 'inherit';
export const POSITION_DEFAULT_VALUE = 'relative';
import { getGlobalStyles } from 'src/global-styles';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const defaultStylesBase = {
  bg: 'transparent',
  color: CSS_INHERIT_VALUE,
  fontFamily: CSS_INHERIT_VALUE,
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
  isFocused: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false,
};
