import {
  borderRadius,
  color,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
} from 'styled-system';
import { getGlobalOverrides } from 'src/global-styles';
import { defaultStylesBase } from './cssDefaults';
import {
  resolveColor,
  resolveFontFamily,
  scaleFont,
  scaleFactor, resolveBorderRadius,
} from './utils';

export const borderRadiusCore = props => {
  const nextGlobalOverrides = getGlobalOverrides(props);
  const nextProps = {
    ...props,
    borderRadius: resolveBorderRadius(props, nextGlobalOverrides),
  };
  return borderRadius(nextProps);
};

export const colorCore = props => {
  let nextProps = null;
  const nextGlobalOverrides = getGlobalOverrides(props);
  if (props.variant) {
    nextProps = {
      ...props,
      bg: resolveColor(props.bg, nextGlobalOverrides, null),
      color: resolveColor(props.color, nextGlobalOverrides, null),
    };
  } else {
    nextProps = {
      ...props,
      bg: resolveColor(props.bg, nextGlobalOverrides, defaultStylesBase.bg),
      color: resolveColor(props.color, nextGlobalOverrides),
    };
  }
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
  const defaultValue = resolveFontFamily(defaultStylesBase.fontFamily);
  let value = defaultValue;
  if (props && props.fontFamily) {
    const nextGlobalOverrides = getGlobalOverrides(props);
    value = resolveFontFamily(props.fontFamily, nextGlobalOverrides, defaultValue);
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
