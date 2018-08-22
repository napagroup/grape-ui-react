import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { passThrough } from 'src/utils/componentHelpers';
import {
  width,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  position,
  size,
  ratio,
  zIndex,
  top,
  right,
  bottom,
  left,
} from 'styled-system';
import { withStyledSystem, withBaseStyles } from 'src/decorators';

export const Box = (props, context) => {
  const { theme } = context;
  const overrides = {
    ...props,
    fontSizeBase: '100%',
    theme,
  };
  const BaseBox = withBaseStyles(styled.div``, overrides);
  const ProtoBox = withStyledSystem(BaseBox, overrides);
  return <ProtoBox {...passThrough(Box, props)} />;
};
Box.contextTypes = {
  theme: PropTypes.any,
};

Box.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  ...display.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...ratio.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
};

Box.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
