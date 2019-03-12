import { getGlobalStyles } from 'src/global-styles';
import { resolveColor } from './resolvers';

export const getButtonThemesByVariant = (type, globalOverrides) => {
  // return all themes of that type.
  const { buttonVariant: buttonVariantSchema } = globalOverrides;
  const variantThemes = buttonVariantSchema[type];

  if (!variantThemes) {
    return {};
  }
  return Object.keys(variantThemes).reduce((prev, current) => {
    const variantName = type !== 'plain' ? `${type}-${current}` : current;
    const currentTheme = variantThemes[current];
    const vTheme = {
      ...prev,
      [variantName]: {
        backgroundColor: resolveColor(currentTheme.backgroundColor, globalOverrides, null),
        color: resolveColor(currentTheme.color, globalOverrides, null),
      },
    };
    if (variantThemes[current].focusColor) {
      vTheme[variantName]['&:focus'] = {
        backgroundColor: resolveColor(currentTheme.focusColor, globalOverrides, null),
      };
    }
    if (variantThemes[current].hoverColor) {
      vTheme[variantName]['&:hover'] = {
        backgroundColor: resolveColor(currentTheme.hoverColor, globalOverrides, null),
      };
    }
    return vTheme;
  }, {});
};
export const buttonThemes = (variantTypes, globalOverrides) => {
  const globalStyles = globalOverrides || getGlobalStyles();
  const { buttonVariant: buttonVariantSchema } = globalStyles;

  if (!variantTypes) {
    // return all button variants
    return Object.keys(buttonVariantSchema).reduce((prev, current) => ({
      ...prev,
      ...getButtonThemesByVariant(current, globalStyles),
    }), {});
  }
  if (Array.isArray(variantTypes)) {
    // return button variants based on indicated types.
    return variantTypes.reduce((prev, current) => ({
      ...prev,
      ...getButtonThemesByVariant(current, globalStyles),
    }), {});
  }
  return null;
};
