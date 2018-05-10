// import * as colorSchema from '../../assets/json/colors.json';
import { getGlobalStyles } from '../../global-styles';
import { isKeyNestedProp, resolve } from '../objectHelpers';

const { colors: colorSchema } = getGlobalStyles();
const defaultValue = 'inherit';

const resolveColor = color => {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  const resolvedValue = isKeyNestedProp(color) ? resolve(color, colorSchema) : resolve(`${color}.base`, colorSchema);
  return resolvedValue || defaultValue;
};

export { resolveColor };
