import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { resolveColor } from './utils';
import { defaultControlStyles, defaultStylesBase } from './cssDefaults';
import { colorCore } from './core';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const controlColor = props => {
  const { bg, formStyle } = props;
  const nextBg = (formStyle === 'filled' && !bg) ? 'formControlFilledBg' : bg || defaultStylesBase.bg;
  return colorCore({ ...props, bg: nextBg });
};

export const focusStyles = props => {
  const {
    activeColor,
    formStyle,
  } = props;
  const globalOverrides = getGlobalOverrides(props);
  const focusColor = !activeColor ? resolveColor(defaultControlStyles.activeColor, globalOverrides) : resolveColor(activeColor, globalOverrides);
  if (formStyle === 'filled') {
    return `
      border-bottom: 2px solid ${focusColor};
      margin-bottom: -1px;
      + label { color: ${focusColor}; }
    `;
  }
  return `
    border-color: ${focusColor};
    box-shadow: 0 0 0 1px ${focusColor};
    + label { color: ${focusColor}; }
  `;
};

export const disabledStyle = `
  opacity: 0.3;
  ~ * { color: rgba(0,0,0,0.3); }
`;

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

export const getFinalFieldPadding = (padding, formStyle, labelText) => ((formStyle === 'filled' && labelText)
  ? `${Number.parseInt(padding, 10) * 1.5}rem ${padding} ${Number.parseInt(padding, 10) / 2}rem`
  : padding);

const getFinalStyle = props => {
  const {
    activeColor,
    borderColor,
    formStyle,
    labelText,
    padding,
    placeholderColor,
  } = props;
  const scale = scaleFactor(props);
  const globalOverrides = getGlobalOverrides(props);
  const focusStyle = focusStyles({ activeColor, formStyle, ...globalOverrides });
  const resolvedBorderColor = resolveColor(borderColor, globalOverrides);
  const resolvedPlaceholderColor = resolveColor(placeholderColor, globalOverrides);
  const topLabel = `${Number.parseInt(padding, 10) - 0.2}rem`;
  const controlSharedStyle = `
    outline: 0;
    padding: ${getFinalFieldPadding(padding, formStyle, labelText)};
    width: 100%;
    &[required] + label:after { content: "*" }
    &[disabled] {
      ${disabledStyle}
    }
    &:focus{ ${focusStyle} }
    &::placeholder { color: ${resolvedPlaceholderColor} }
  `;
  if (formStyle === 'filled') {
    return `
      border-bottom: 1px solid ${resolvedBorderColor};
      border-radius: ${scale} ${scale} 0 0;
      + label {
        background: transparent;
        line-height: 1;
        top: ${topLabel};
      }
      ${controlSharedStyle}
    `;
  }
  return `
    border: 1px solid ${resolvedBorderColor};
    border-radius: ${scale};
    ${controlSharedStyle}
  `;
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
  const {
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
  return getFinalStyle({
    ...props,
    ...overrides,
  });
};
