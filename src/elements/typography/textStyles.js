import * as colorSchema from '../../assets/json/colors.json';
import * as fontSizeSchema from '../../assets/json/fontSize.json';

export const textStylesBase = ({
  fontSizeBase = fontSizeSchema.baseFontSize,
  fontWeight = 'inherit',
  italic = false,
  kerning = false,
  lg = false,
  sm = false,
  textAlign = 'inherit',
}) => {
  const { sizeVariants } = fontSizeSchema;
  const { base: schemaBase, sm: schemaSm, lg: schemaLg } = sizeVariants;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  };
  const fontFamily = 'inherit';
  return `
    font-family: ${fontFamily};
    ${kerning ? 'font-kerning: normal;' : ''}
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    text-align: ${textAlign};
  `;
};
