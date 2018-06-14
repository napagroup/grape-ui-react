import * as breakpoints from 'src/assets/json/breakpoints.json';
import * as colors from 'src/assets/json/colors.json';
import * as fontFamily from 'src/assets/json/fontFamily.json';
import * as fontSize from 'src/assets/json/fontSize.json';
import * as shadow from 'src/assets/json/shadow.json';
import * as zIndex from 'src/assets/json/zIndex.json';
import * as grid from 'src/assets/json/grid.json';

export const getGlobalStyles = (overrides = {}) => {
  if (overrides instanceof Object && !Array.isArray(overrides)) {
    const {
      breakpoints: breakpointOverrides = {},
      colors: colorsOverrides = {},
      fontFamily: fontFamilyOverrides = {},
      fontSize: fontSizeOverrides = {},
      shadow: shadowOverrides = {},
      zIndex: zIndexOverrides = {},
      grid: gridOverrides = {},
    } = overrides;
    return {
      breakpoints: { ...breakpoints, ...breakpointOverrides },
      colors: { ...colors, ...colorsOverrides },
      fontFamily: { ...fontFamily, ...fontFamilyOverrides },
      fontSize: { ...fontSize, ...fontSizeOverrides },
      shadow: { ...shadow, ...shadowOverrides },
      zIndex: { ...zIndex, ...zIndexOverrides },
      grid: { ...grid, ...gridOverrides },
    };
  }
  return getGlobalStyles();
};
