import { resolveColor } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledFontSize } from './utils';
import PropTypes from 'prop-types';

const { fontFamily: fontFamilySchema, fontSize: fontSizeSchema } = getGlobalStyles();

export const defaultTextStylesBase = {
  color: 'inherit',
  fontFamily: 'inherit',
  fontSizeBase: 'inherit',
  fontWeight: 'inherit',
  italic: false,
  kerning: 'inherit',
  lg: false,
  sm: false,
  textAlign: 'inherit',
  textDecoration: 'inherit',
};

const getScaleFactor = props => {
  const { sm, lg } = props;
  const { sizeVariants: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = fontSizeSchema;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = null;
  }
  return scaleFactor;
};

const getColorFromProps = props => {
  const { color } = props;
  if (!color) {
    return defaultTextStylesBase.color;
  }
  return resolveColor(color);
};

export const getFontFamily = props => {
  if (props && props.fontFamily) {
    return `font-family: ${fontFamilySchema[props.fontFamily] || defaultTextStylesBase.fontFamily};`;
  }
  return `font-family: ${defaultTextStylesBase.fontFamily};`;
};
export const getFontSize = props => {
  const scaleFactor = getScaleFactor(props);
  const fontSizeBase = props.fontSizeBase || defaultTextStylesBase.fontSizeBase;
  return `font-size: ${scaleFactor ? getScaledFontSize(fontSizeBase, scaleFactor) : fontSizeBase};`;
};
export const getFontWeight = props => `font-weight: ${props.fontWeight || defaultTextStylesBase.fontWeight};`;
export const getLetterSpacing = props => `letter-spacing: ${props.kerning || defaultTextStylesBase.kerning};`;
export const getLineHeight = () => 'line-height: 1.5;';
export const getFontStyle = props => `${props.italic ? 'font-style: italic;' : ''}`;
export const getColor = props => `color: ${getColorFromProps(props)};`;
export const getTextAlign = props => `text-align: ${props.textAlign || defaultTextStylesBase.textAlign};`;
export const getTextDecoration = props => `text-decoration: ${props.textDecoration || defaultTextStylesBase.textDecoration};`;

export const textStylesBase = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultTextStylesBase;
  } else {
    overrides = {
      ...defaultTextStylesBase,
      ...props,
    };
  }

  const scaleFactor = getScaleFactor(props);
  const {
    fontSizeBase,
    fontWeight,
    italic,
    kerning,
    textAlign,
    textDecoration,
  } = overrides;
  return `
    ${getFontFamily(props)}
    font-size: ${scaleFactor ? getScaledFontSize(fontSizeBase, scaleFactor) : fontSizeBase};
    font-weight: ${fontWeight};
    letter-spacing: ${kerning};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    ${getColor(props)}
    text-align: ${textAlign};
    text-decoration: ${textDecoration};
  `;
};
export const typography = {
  propTypes: {
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    italic: PropTypes.bool,
    kerning: PropTypes.string,
    lg: PropTypes.bool,
    sm: PropTypes.bool,
    textAlign: PropTypes.string,
    textDecoration: PropTypes.string,
  },
};
