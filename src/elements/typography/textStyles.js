import { resolveColor } from '../../utils/componentHelpers';
import * as fontSizeSchema from '../../assets/json/fontSize.json';

const defaultTextStylesBase = {
  fontSizeBase: fontSizeSchema.baseFontSize,
  color: 'inherit',
  fontWeight: 'inherit',
  italic: false,
  lg: false,
  sm: false,
  textAlign: 'inherit',
};

const getScaleFactor = props => {
  const { sm, lg } = props;
  const { sizeVariants: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = fontSizeSchema;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  }
  return scaleFactor;
};

const getColor = props => {
  const { color } = props;
  if (!color) {
    return defaultTextStylesBase.color;
  }
  return resolveColor(color);
};

export const textStylesBase = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultTextStylesBase;
  } else {
    overrides = {
      ...defaultTextStylesBase,
      ...props,
      color: getColor(props),
    };
  }

  const scaleFactor = getScaleFactor(props);
  const {
    fontSizeBase, italic, color, fontWeight, textAlign,
  } = overrides;
  return `
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    color: ${color};
    text-align: ${textAlign};
  `;
};

