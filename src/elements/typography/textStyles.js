import * as fontSizeSchema from '../../assets/json/fontSize.json';

const defaultTextStylesBase = {
  colorBase: 'inherit',
  fontSizeBase: fontSizeSchema.baseFontSize,
  fontWeight: 'inherit',
  italic: false,
  kerning: false,
  lg: false,
  sm: false,
  textAlign: 'inherit',
};

export const textStylesBase = ({
  colorBase = 'inherit',
  fontSizeBase = fontSizeSchema.baseFontSize,
  fontWeight = 'inherit',
  italic = false,
  kerning = false,
  lg = false,
  sm = false,
  textAlign = 'inherit',
} = defaultTextStylesBase) => {
  const { sizeVariants } = fontSizeSchema;
  const { base: schemaBase, sm: schemaSm, lg: schemaLg } = sizeVariants;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  }
  return `
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    color: ${colorBase};
    text-align: ${textAlign};
    ${kerning ? 'font-kerning: normal;' : ''}
  `;
};

