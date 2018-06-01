import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import except from 'except';

const { colors: colorSchema } = getGlobalStyles();
const defaultValue = 'inherit';

const resolveColor = color => {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  const resolvedValue = isKeyNestedProp(color) ? resolveToProperty(color, colorSchema) : resolveToProperty(`${color}.base`, colorSchema);
  return resolvedValue || defaultValue;
};

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

export { resolveColor, passThrough, addPassthroughMethod };
