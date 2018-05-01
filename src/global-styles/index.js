import * as breakpoints from '../assets/json/breakpoints.json';
import * as colors from '../assets/json/colors.json';
import * as fontFamily from '../assets/json/fontFamily.json';
import * as fontSize from '../assets/json/fontSize.json';
import * as shadow from '../assets/json/shadow.json';
import * as zIndex from '../assets/json/zIndex.json';

export const getDefaultGlobalStyles = () => ({
  breakpoints: { ...breakpoints },
  colors: { ...colors },
  fontFamily: { ...fontFamily },
  fontSize: { ...fontSize },
  shadow: { ...shadow },
  zIndex: { ...zIndex },
});

export const generateGlobalStyles = (overrides = {}) => {
  if (overrides instanceof Object && !Array.isArray(overrides)) {
    const {
      breakpoints: breakpointOverrides = {},
      colors: colorsOverrides = {},
      fontFamily: fontFamilyOverrides = {},
      fontSize: fontSizeOverrides = {},
      shadow: shadowOverrides = {},
      zIndex: zIndexOverrides = {},
    } = overrides;
    return {
      breakpoints: { ...breakpoints, ...breakpointOverrides },
      colors: { ...colors, ...colorsOverrides },
      fontFamily: { ...fontFamily, ...fontFamilyOverrides },
      fontSize: { ...fontSize, ...fontSizeOverrides },
      shadow: { ...shadow, ...shadowOverrides },
      zIndex: { ...zIndex, ...zIndexOverrides },
    };
  }
  return getDefaultGlobalStyles();
};
