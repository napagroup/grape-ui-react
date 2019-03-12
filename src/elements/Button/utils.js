import { style } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { resolveColor, POSITION_DEFAULT_VALUE } from 'src/utils/styledHelpers';
import { DEFAULT_BUTTON_LINE_HEIGHT } from './constants';

const { colors: colorSchema } = getGlobalStyles();
const { brandPrimary } = colorSchema;

const containedStyle = '';
const outlineStyle = '';
const raisedStyle = '';

// I see user can only apply one of those contained, outline and raised. if you need to apply both and/or all styles, let Ping know
export const getAdvanceButtonStyle = (props = {}) => {
  if (props.contained) {
    return containedStyle;
  } if (props.outline) {
    return outlineStyle;
  } if (props.raised) {
    return raisedStyle;
  }
  return '';
};

const borderWidthStyle = style({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'border',
  // key for theme values
  key: 'border',
  // React prop name
  prop: 'border',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: value => value || `1px solid ${resolveColor()}`,
});

export const borderButton = props => (props.borderWidth ? borderWidthStyle(props) : `border: 1px solid ${brandPrimary.base};`);

export const lineHeightStyle = style({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'line-height',
  // key for theme values
  key: 'lineHeight',
  // React prop name
  prop: 'lineHeight',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: lineHeight => parseFloat(lineHeight) || DEFAULT_BUTTON_LINE_HEIGHT,
});

export const lineHeightButton = props => (props.lineHeight ? lineHeightStyle(props) : `line-height: ${DEFAULT_BUTTON_LINE_HEIGHT};`);

const positionStyle = style({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'position',
  // key for theme values
  key: 'position',
  // React prop name
  prop: 'position',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: position => position || POSITION_DEFAULT_VALUE,
});

export const positionButton = props => (props.position ? positionStyle(props) : `position: ${POSITION_DEFAULT_VALUE};`);
