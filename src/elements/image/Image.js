import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'react-image';
import { passThrough } from 'src/utils/componentHelpers';
import {
  width,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
} from 'styled-system';
import { withStyledSystem } from 'src/decorators';

const getImageInstance = props => {
  const { alt } = props;
  if (!alt) {
    // eslint-disable-next-line no-console
    console.error('🍇: alt property is required for Image'); // there is an explicit requirement scenerio to use console here.
  }
  return styled(Img)``;
};

export const Image = props => {
  const { alt } = props;
  const overrides = {
    ...props,
  };
  const ProtoImage = withStyledSystem(getImageInstance(props), overrides);
  const propsToPassThru = {
    ...passThrough(Image, props),
    alt,
  };
  return <ProtoImage {...propsToPassThru} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  maxWidth: PropTypes.string,
  w: PropTypes.string,
  ...display.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
};

Image.defaultProps = {
  alt: '',
  w: '100%',
  maxWidth: '100%',
};
