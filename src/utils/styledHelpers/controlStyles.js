import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { resolveColor } from './utils';
import { defaultControlStyles } from './cssDefaults';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const focusStyles = props => {
  const { activeColor } = props;
  const globalOverrides = getGlobalOverrides(props);
  const focusColor = !activeColor ? resolveColor(defaultControlStyles.activeColor, globalOverrides) : resolveColor(activeColor, globalOverrides);
  return `
    border-color: ${focusColor};
    box-shadow: 0 0 0 1px ${focusColor};
    + label { color: ${focusColor}; }
  `;
};

const scaleFactor = props => {
  const { sm, lg } = props;
  const { borderRadius: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = borderSchema;
  let value = schemaBase;
  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  } else {
    value = schemaBase;
  }
  return value;
};

const getFinalStyle = ({
  borderColor,
  focusStyle,
  formStyle,
  globalOverrides,
  padding,
  placeholderColor,
  scale,
}) => {
  const resolvedBorderColor = resolveColor(borderColor, globalOverrides);
  const resolvedPlaceholderColor = resolveColor(placeholderColor, globalOverrides);
  // TODO: Ryan please apply the filled style here
  if (formStyle === 'filled') {
    return `
      border: 2px solid ${resolvedBorderColor};
      border-radius: ${scale};
      padding: ${padding};
      outline: 1;
      width: 100%;
      &:focus{
        ${focusStyle}
      }
      &[required] + label:after { content: "*" }
      &[disabled] {
        opacity: 0.3;
        ~ * { color: rgba(0,0,0,0.3); }
      }
      &::placeholder {
        color: ${resolvedPlaceholderColor}
    }`;
  }
  return `
    border: 1px solid ${resolvedBorderColor};
    border-radius: ${scale};
    padding: ${padding};
    outline: 0;
    width: 100%;
    &:focus{
      ${focusStyle}
    }
    &[required] + label:after { content: "*" }
    &[disabled] {
      opacity: 0.3;
      ~ * { color: rgba(0,0,0,0.3); }
    }
    &::placeholder {
      color: ${resolvedPlaceholderColor}
    }`;
};

export const controlStyles = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultControlStyles;
  } else {
    overrides = {
      ...defaultControlStyles,
      ...props,
      padding: gridSchema[props.gutter] || defaultControlStyles.padding,
    };
  }
  const globalOverrides = getGlobalOverrides(props);
  const {
    activeColor,
    borderColor,
    padding,
    placeholderColor,
    plainText,
    formStyle,

  } = overrides;
  const focusStyle = focusStyles(activeColor, globalOverrides);

  if (plainText) {
    return `
      border: 0;
      display: block;
      outline: 0;
      padding: ${padding};
    `;
  }
  return getFinalStyle({
    borderColor,
    focusStyle,
    formStyle,
    globalOverrides,
    padding,
    placeholderColor,
    scale: scaleFactor(props),
  });
};
