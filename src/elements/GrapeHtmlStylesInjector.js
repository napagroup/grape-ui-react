import { injectGlobal } from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';

const { fontSize: fontSizeSchema, fontFamily: fontFamilySchema } = getGlobalStyles();

export const grapeHtmlStylesInjector = injectGlobal`
  html {
    font-family: ${fontFamilySchema.base};
    font-size: ${fontSizeSchema.baseFontSize};
  }
`;
