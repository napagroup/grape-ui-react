import { resolveColor } from 'src/utils/styledHelpers';

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
