// import * as colorSchema from '../../assets/json/colors.json';
import { getGlobalStyles } from '../../global-styles';
import { isKeyNestedProp, resolveToProperty } from '../objectHelpers';

const { colors: colorSchema } = getGlobalStyles();
const defaultValue = 'inherit';

const resolveColor = color => {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  const resolvedValue = isKeyNestedProp(color) ? resolveToProperty(color, colorSchema) : resolveToProperty(`${color}.base`, colorSchema);
  return resolvedValue || defaultValue;
};

export { resolveColor };
