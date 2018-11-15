import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import except from 'except';

const { colors: colorSchema, shadow: shadowSchema, zIndex: zIndexSchema } = getGlobalStyles();
const defaultValue = 'inherit';

const resolveColor = color => {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  const resolvedValue = isKeyNestedProp(color) ? resolveToProperty(color, colorSchema) : resolveToProperty(`${color}.base`, colorSchema);
  return resolvedValue || defaultValue;
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
    return defaultValue;
  }
  const resolvedBoxShadow = resolveToProperty(depth, shadowSchema);
  return resolvedBoxShadow || defaultValue;
};

const resolveZIndex = depth => {
  if (!depth || typeof depth !== 'string') {
    return defaultValue;
  }
  const resolvedZIndex = resolveToProperty(depth, zIndexSchema);
  return resolvedZIndex || defaultValue;
};

const resolveElevation = depth => {
  if (!depth || typeof depth !== 'string') {
    return defaultValue;
  }
  const resolvedBoxShadow = resolveBoxShadow(depth);
  const resolvedZIndex = resolveZIndex(depth);
  return `z-index: ${resolvedZIndex}; box-shadow: ${resolvedBoxShadow}` || defaultValue;
};

export { resolveBoxShadow, resolveColor, resolveElevation, resolveZIndex, passThrough, addPassthroughMethod, removeSomeProps };
