import { css } from 'styled-components';
import * as fontSizeObject from '../../assets/json/fontSize.json';

export const textStylesBase = ({
  fontSizeBase = fontSizeObject.baseFontSize,
  italic =  false,
  lg = false,
  sm = false,
}) => {
  const fontSizeVariants = fontSizeObject.sizeVariants;
  let sizeVariant = fontSizeVariants.base;
  if (lg) {
    sizeVariant = fontSizeVariants.lg;
  } else if (sm) {
    sizeVariant = fontSizeVariants.sm;
  }
  const Primitive = `
    font-size: calc(${fontSizeBase} * ${sizeVariant});
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
  `;
  return Primitive;
};
