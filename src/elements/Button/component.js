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
import { Link as ReactRouterLink } from 'react-router-dom';

const propsToTrimForButton = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
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
  href: PropTypes.string,
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
  target: PropTypes.string,
  to: PropTypes.string,
  ...top.propTypes,
  ...typography.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};

const propsToTrimForLink = {
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
export const ButtonComponent = ({
  children,
  href,
  target,
  to,
  ...props
}) => {
  let output = null;
  if (href) {
    output = (<a {...removeSomeProps(props, Object.keys(propsToTrimForLink))} href={href} target={target}> {children} </a>);
  } else if (to) {
    const linkProps = {
      target,
      to,
    };
    output = (<ReactRouterLink {...removeSomeProps(props, Object.keys(propsToTrimForLink))} {...linkProps} > {children} </ReactRouterLink>);
  } else {
    output = (<button {...removeSomeProps(props, Object.keys(propsToTrimForButton))}> {children} </button>);
  }
  return output;
};
ButtonComponent.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
};
ButtonComponent.defaultProps = {
  children: null,
  href: null,
  target: '_self',
  to: null,
};
