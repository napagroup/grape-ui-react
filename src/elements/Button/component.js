import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/elements/typography/textStyles';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  alignContent,
  alignItems,
  alignSelf,
  border,
  borderWidth,
  bottom,
  color,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  left,
  letterSpacing,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  ratio,
  right,
  size,
  space,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';

const propsToTrim = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  bgColor: '',
  ...border.propTypes,
  ...borderWidth.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  contained: false,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...left.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  outline: false,
  ...position.propTypes,
  raised: false,
  ...ratio.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...typography.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};
export const ButtonComponent = ({ children, ...props }) => (
  <button {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </button>
);
ButtonComponent.propTypes = {
  children: PropTypes.any,
};
ButtonComponent.defaultProps = {
  children: null,
};
