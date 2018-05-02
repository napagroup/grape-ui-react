import styled, { css } from 'styled-components';
import { native as fontFamilyNative } from '../../assets/json/fontFamily.json';
import { base as fontSizeBase } from '../../assets/json/fontSize.json';

const baseFontFamily = fontFamilyNative;
const baseFontSize = fontSizeBase;

const textStylesBase = css`
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  line-height: 1.5;
`;

export const Paragraph = styled.p`
  ${textStylesBase}
`;

