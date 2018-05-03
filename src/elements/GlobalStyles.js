import { injectGlobal } from 'styled-components';
import * as fontSizeAssets from '../assets/json/fontSize.json';
import * as fontFamilyAssets from '../assets/json/fontFamily.json';

export const GrapeGlobal = injectGlobal`
  html {
    font-family: ${fontFamilyAssets.native};
  }
  body {
    font-size: ${fontSizeAssets.p.base};
  }
`;
