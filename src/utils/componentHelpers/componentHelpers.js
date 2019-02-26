import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import except from 'except';
import { COLOR_DEFAULT_VALUE, CSS_INHERIT_VALUE } from '../styledHelpers';

const { colors: colorSchema, shadow: shadowSchema, zIndex: zIndexSchema } = getGlobalStyles();

const resolveColor = color => {
  if (!color || typeof color !== 'string') {
    return COLOR_DEFAULT_VALUE;
  }
  const resolvedValue = isKeyNestedProp(color)
    ? resolveToProperty(color, colorSchema)
    : resolveToProperty(`${color}.base`, colorSchema);
  return resolvedValue || COLOR_DEFAULT_VALUE;
};

const removeSomeProps = (originalProps, toBeRemovedProps) => except(originalProps, toBeRemovedProps);

const passThrough = (component, props) => {
  const omit = Object.keys(component.propTypes || {});
  return except(props, omit);
};
const addPassthroughMethod = component => {
  const refComponent = component;
  refComponent.prototype.passThrough = () => {
    const omit = Object.keys(component.propTypes || {});
    return except(this.props, omit);
  };
};

const resolveBoxShadow = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveToProperty(depth, shadowSchema);
  return resolvedBoxShadow || CSS_INHERIT_VALUE;
};

const resolveZIndex = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedZIndex = resolveToProperty(depth, zIndexSchema);
  return resolvedZIndex || CSS_INHERIT_VALUE;
};

const resolveElevation = depth => {
  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }
  const resolvedBoxShadow = resolveBoxShadow(depth);
  const resolvedZIndex = resolveZIndex(depth);
  return `z-index: ${resolvedZIndex}; box-shadow: ${resolvedBoxShadow}` || CSS_INHERIT_VALUE;
};

export {
  resolveBoxShadow,
  resolveColor,
  resolveElevation,
  resolveZIndex,
  passThrough,
  addPassthroughMethod,
  removeSomeProps,
};
