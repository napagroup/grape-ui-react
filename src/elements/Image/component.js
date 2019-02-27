import React from 'react';
import PropTypes from 'prop-types';
import {
  width,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
} from 'styled-system';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Img from 'react-image';

const componentPropsToRemove = {
  ...width.propTypes,
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
};

export const ImageComponent = ({ alt, ...props }) => {
  if (!alt) {
    // eslint-disable-next-line no-console
    console.error('🍇: alt property is required for Image'); // there is an explicit requirement scenerio to use console here.
  }
  return (
    <Img alt={alt} {...removeSomeProps(props, Object.keys(componentPropsToRemove))} />
  );
};

ImageComponent.propTypes = {
  alt: PropTypes.string,
  ...width.propTypes,
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
};

ImageComponent.defaultProps = {
  alt: '',
};
