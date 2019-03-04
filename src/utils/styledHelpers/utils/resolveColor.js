import { themeGet } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import { defaultStylesBase } from '..';

const {
  colors: colorSchema,
} = getGlobalStyles();

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
