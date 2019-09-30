import { themeGet } from '@styled-system/theme-get';
import * as border from 'src/assets/json/border.json';
import * as breakpoints from 'src/assets/json/breakpoints.json';
import * as colors from 'src/assets/json/colors.json';
import * as fontFamily from 'src/assets/json/fontFamily.json';
import * as fontSize from 'src/assets/json/fontSize.json';
import * as shadow from 'src/assets/json/shadow.json';
import * as zIndex from 'src/assets/json/zIndex.json';
import * as grid from 'src/assets/json/grid.json';
import * as buttonVariant from 'src/assets/json/buttonVariant.json';

export const getGlobalStyles = (overrides = {}) => {
  if (overrides instanceof Object && !Array.isArray(overrides)) {
    const {
      border: borderOverrides = {},
      breakpoints: breakpointOverrides = {},
      buttonVariant: buttonVariantOverrides = {},
      colors: colorsOverrides = {},
      fontFamily: fontFamilyOverrides = {},
      fontSize: fontSizeOverrides = {},
      shadow: shadowOverrides = {},
      zIndex: zIndexOverrides = {},
      grid: gridOverrides = {},
    } = overrides;
    return {
      border: { ...border, ...borderOverrides },
      breakpoints: { ...breakpoints, ...breakpointOverrides },
      buttonVariant: { ...buttonVariant, ...buttonVariantOverrides },
      colors: { ...colors, ...colorsOverrides },
      fontFamily: { ...fontFamily, ...fontFamilyOverrides },
      fontSize: { ...fontSize, ...fontSizeOverrides },
      grid: { ...grid, ...gridOverrides },
      shadow: { ...shadow, ...shadowOverrides },
      zIndex: { ...zIndex, ...zIndexOverrides },
    };
  }
  return getGlobalStyles();
};

/**
 * Takes in an object containing theme e.g. props.theme.
 * Returns a new global style object with properties of global styles merged and overridden with styles defined in the theme.
 * @param {Object} props The object containing the theme object.
 */
export const getGlobalOverrides = (props = {}) => getGlobalStyles({
  border: themeGet('border', null)(props),
  colors: themeGet('colors', null)(props),
  fontFamily: themeGet('fonts', null)(props),
});
