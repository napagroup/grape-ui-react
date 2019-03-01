import { style } from 'styled-system';
import { getGlobalStyles } from '../../../global-styles';
import { resolveToProperty } from '../../objectHelpers';
import { CSS_INHERIT_VALUE } from '../cssDefaults';

const {

  zIndex: zIndexSchema,
} = getGlobalStyles();
export const zIndexForBase = style({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'z-index',
  // key for theme values
  key: 'zIndexes',
  // React prop name
  prop: 'zIndex',
  // add a fallback scale object or array, if theme is not present
  scale: [0, 0, 0, 0, 0],
  // accessor function for transforming the value
  transformValue: depth => {
    if (!depth || typeof depth !== 'string') {
      return CSS_INHERIT_VALUE;
    }
    const resolvedZIndex = resolveToProperty(depth, zIndexSchema);
    return resolvedZIndex || CSS_INHERIT_VALUE;
  },
});
