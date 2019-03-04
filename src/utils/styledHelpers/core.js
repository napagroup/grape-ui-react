import {
  color,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import { defaultStylesBase } from './cssDefaults';
import {
  resolveColorByPropName,
  scaleFont,
  scaleFactor,
} from './utils';

const {
  fontFamily: fontFamilySchema,
} = getGlobalStyles();

export const colorCore = props => {
  const nextProps = {
    ...props,
    bg: resolveColorByPropName(props, 'bg', defaultStylesBase.bg),
    color: resolveColorByPropName(props, 'color'),
  };
  return color(nextProps);
};
export const fontSizeCore = props => {
  let value = props.fontSize || defaultStylesBase.fontSize;
  const scaleValue = scaleFactor(props);
  if (scaleValue) {
    value = scaleValue ? scaleFont(value, scaleValue, 1, 'rem') : value;
  }
  const nextProps = {
    ...props,
    fontSize: value,
  };
  return fontSize(nextProps);
};

export const fontFamilyCore = props => {
  let value = defaultStylesBase.fontFamily;
  if (props && props.fontFamily) {
    value = fontFamilySchema[props.fontFamily] || defaultStylesBase.fontFamily;
  }
  const nextProps = {
    ...props,
    fontFamily: value,
  };
  return fontFamily(nextProps);
};

export const letterSpacingCore = props => letterSpacing({ ...props, letterSpacing: props.kerning || defaultStylesBase.kerning });
export const lineHeightCore = props => lineHeight({ ...props, lineHeight: props.lineHeight || defaultStylesBase.lineHeight });
export const fontStyleCore = props => `${props.italic ? 'font-style: italic;' : ''}`;
export const textAlignCore = props => textAlign({ ...props, textAlign: props.textAlign || defaultStylesBase.textAlign });
export const textDecorationCore = props => `text-decoration: ${props.textDecoration || defaultStylesBase.textDecoration};`;
