import { injectGlobal } from 'styled-components';
import * as breakpointSchema from '../assets/json/breakpoints.json';
import * as fontSizeSchema from '../assets/json/fontSize.json';
import * as fontFamilySchema from '../assets/json/fontFamily.json';

export const GrapeGlobal = injectGlobal`
  html {
    font-family: ${fontFamilySchema.base};
    font-size: ${fontSizeSchema.baseFontSize};
  }
`;
