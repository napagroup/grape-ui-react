import { getGlobalStyles } from 'src/global-styles';
import { resolveColor } from 'src/utils/componentHelpers';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const defaultControlStylesBase = {
  activeColor: 'brandPrimary',
  bgColor: 'white.light',
  borderColor: borderSchema.borderColor,
  borderRadius: borderSchema.borderRadius.base,
  padding: gridSchema.gutter,
  plainText: false,
};

const getActiveColor = props => {
  const { activeColor } = props;
  if (!activeColor) {
    return resolveColor(defaultControlStylesBase.activeColor);
  }
  return resolveColor(activeColor);
};

const getScaleFactor = props => {
  const { sm, lg } = props;
  const { borderRadius: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = borderSchema;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = schemaBase;
  }
  return scaleFactor;
};

export const controlStylesBase = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultControlStylesBase;
  } else {
    overrides = {
      ...defaultControlStylesBase,
      ...props,
      padding: gridSchema[props.gutter] || defaultControlStylesBase.padding,
    };
  }

  const scaleFactor = getScaleFactor(props);
  const {
    activeColor,
    borderColor,
    padding,
    plainText,
  } = overrides;
  if (plainText) {
    return `
      border: 0;
      display: block;
      outline: 0;
      padding: ${padding};
    `;
  }
  return `
    border: 1px solid ${borderColor};
    border-radius: ${scaleFactor};
    padding: ${padding};
    outline: 0;
    width: 100%;
    &:focus {
      border-color: ${getActiveColor(activeColor)};
      box-shadow: 0 0 0 1px ${getActiveColor(activeColor)};;
      + label { color: ${getActiveColor(activeColor)};; }
    }
    &[required] + label:after { content: "*" }
    &[disabled] {
      opacity: 0.3;
      ~ * { color: rgba(0,0,0,0.3); }
    }
  `;
};
