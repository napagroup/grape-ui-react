import { resolveColor } from 'src/utils/styledHelpers';

var hasVariant = function hasVariant(variant) {
  if (!variant) {
    return false;
  }

  return !!variant;
};

export var activeColorButton = function activeColorButton(props) {
  var bgActiveColor = props.bgActiveColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgActiveColor || bgActiveColor === null ? resolveColor('white.light') : resolveColor(bgActiveColor);
  return "background-color: ".concat(color);
};
export var hoverColorButton = function hoverColorButton(props) {
  var bgHoverColor = props.bgHoverColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgHoverColor || bgHoverColor === null ? resolveColor('white.dark') : resolveColor(bgHoverColor);
  return "background-color: ".concat(color);
};