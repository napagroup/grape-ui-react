import { getGlobalStyles } from 'src/global-styles';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const defaultControlStylesBase = {
  activeColor: borderSchema.borderColorActive,
  borderColor: borderSchema.borderColor,
  borderRadius: borderSchema.borderRadius.base,
  padding: gridSchema.gutter,
  plainText: false,
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
    return null;
  }
  return `
    border: 1px solid ${borderColor};
    border-radius: ${scaleFactor};
    padding: ${padding};
    outline: 0;
    width: 100%;
    &:focus {
      border-color: ${activeColor};
      box-shadow: 0 0 0 1px ${activeColor};
      + label { color: ${activeColor}; }
    }
    &[required] + label:after { content: "*" }
    &[disabled] {
      opacity: 0.3;
      ~ * { color: rgba(0,0,0,0.3); }
    }
  `;
};
