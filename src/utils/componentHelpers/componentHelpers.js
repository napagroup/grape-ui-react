import { getGlobalStyles } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';

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
