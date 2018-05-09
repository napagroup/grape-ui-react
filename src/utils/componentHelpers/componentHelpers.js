import * as colorSchema from '../../assets/json/colors.json';
import { isKeyNestedProp, resolve } from '../objectHelpers';

const resolveColor = color => {
  if (!color) {
    return 'inherit';
  }
  return isKeyNestedProp(color) ? resolve(color, colorSchema) : resolve(`${color}.base`, colorSchema);
};

export { resolveColor };
