import * as fontSizeSchema from '../../assets/json/fontSize.json';

const defaultTextStylesBase = {
  fontSizeBase: fontSizeSchema.baseFontSize,
  colorBase: 'inherit',
  italic: false,
  lg: false,
  sm: false,
};

export const textStylesBase = ({
  fontSizeBase = fontSizeSchema.baseFontSize,
  colorBase = 'inherit',
  italic = false,
  lg = false,
  sm = false,
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
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    color: ${colorBase};
  `;
};
