import { style } from 'styled-system';
import { POSITION_DEFAULT_VALUE } from 'src/utils/styledHelpers';
import { DEFAULT_BUTTON_LINE_HEIGHT } from './constants';

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
