import { themeGet } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import { defaultStylesBase } from '..';
import { CSS_INHERIT_VALUE } from '../cssDefaults';

const { colors: colorSchema, shadow: shadowSchema, zIndex: zIndexSchema } = getGlobalStyles();

export const resolveColor = (colorToResolve, colorsTheme = colorSchema, defaultColor = defaultStylesBase.color) => {
  const resolvedValue = isKeyNestedProp(colorToResolve)
    ? resolveToProperty(colorToResolve, colorsTheme)
    : resolveToProperty(`${colorToResolve}.base`, colorsTheme);
  return resolvedValue || defaultColor;
};
/*
  Grape UI Core style helpers.
*/
export const resolveColorByPropName = (props, propName = 'color', defaultColor = defaultStylesBase.color) => {
  if (!props[propName] || typeof props[propName] !== 'string') {
    return defaultColor;
  }
  // If available, get the props.theme.color or default to colorSchema.
  const colorsTheme = themeGet('colors', colorSchema)(props);
  return resolveColor(props[propName], colorsTheme, defaultColor);
};

export const resolveBoxShadow = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveToProperty(depth, shadowSchema);
  return resolvedBoxShadow || CSS_INHERIT_VALUE;
};

export const resolveZIndex = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedZIndex = resolveToProperty(depth, zIndexSchema);
  return resolvedZIndex || CSS_INHERIT_VALUE;
};

export const resolveElevation = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveBoxShadow(depth);
  const resolvedZIndex = resolveZIndex(depth);
  return `z-index: ${resolvedZIndex}; box-shadow: ${resolvedBoxShadow}` || CSS_INHERIT_VALUE;
};
