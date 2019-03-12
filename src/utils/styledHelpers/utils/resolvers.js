import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import { defaultStylesBase } from '..';
import { CSS_INHERIT_VALUE } from '../cssDefaults';

/**
 *
 * @param {Object} globalOverrides Takes in global styles as an object. If the object has theme property, it will resolve to new global styled object with theme styles via getGlobalOverrides.
 * Othewise returns the global styles object as is. If undefined returns the default global style object via getGlobalStyles.
 */
export const resolveGlobal = (globalOverrides = getGlobalStyles()) => {
  const theme = resolveToProperty('theme', globalOverrides);
  return theme ? getGlobalOverrides(globalOverrides) : globalOverrides;
};

export const resolveColor = (colorToResolve, globalOverrides, defaultColor = defaultStylesBase.color) => {
  const globalStyles = resolveGlobal(globalOverrides);
  const { colors: colorSchema } = globalStyles;
  const resolvedValue = isKeyNestedProp(colorToResolve)
    ? resolveToProperty(colorToResolve, colorSchema)
    : resolveToProperty(`${colorToResolve}.base`, colorSchema);
  return resolvedValue || defaultColor;
};
/*
  Grape UI Core style helpers.
*/

export const resolveBoxShadow = (depth, globalOverrides) => {
  const { shadow: shadowSchema } = resolveGlobal(globalOverrides);

  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveToProperty(depth, shadowSchema);
  return resolvedBoxShadow || CSS_INHERIT_VALUE;
};

export const resolveZIndex = (depth, globalOverrides) => {
  const { zIndex: zIndexSchema } = resolveGlobal(globalOverrides);

  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedZIndex = resolveToProperty(depth, zIndexSchema);
  return resolvedZIndex || CSS_INHERIT_VALUE;
};

export const resolveElevation = (depth, globalOverrides) => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveBoxShadow(depth, globalOverrides);
  const resolvedZIndex = resolveZIndex(depth, globalOverrides);
  return `z-index: ${resolvedZIndex}; box-shadow: ${resolvedBoxShadow}` || CSS_INHERIT_VALUE;
};
