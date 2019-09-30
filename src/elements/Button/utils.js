import { style } from 'styled-system';
import { POSITION_DEFAULT_VALUE, resolveColor } from 'src/utils/styledHelpers';

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

const hasVariant = variant => {
  if (!variant) {
    return false;
  }
  return !!variant;
};

export const activeColorButton = props => {
  const { bgActiveColor, variant } = props;
  if (hasVariant(variant)) {
    return null;
  }
  const color = (!bgActiveColor || bgActiveColor === null) ? resolveColor('white.light') : resolveColor(bgActiveColor);
  return `background-color: ${color}`;
};

export const hoverColorButton = props => {
  const { bgHoverColor, variant } = props;
  if (hasVariant(variant)) {
    return null;
  }
  const color = (!bgHoverColor || bgHoverColor === null) ? resolveColor('white.dark') : resolveColor(bgHoverColor);
  return `background-color: ${color}`;
};
