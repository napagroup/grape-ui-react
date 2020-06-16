import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Img } from 'react-image';
import propTypes from '@styled-system/prop-types';

const componentPropsToRemove = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.space,
};

export const ImageComponent = ({ alt, ...props }) => (
  <Img alt={alt} {...removeSomeProps(props, Object.keys(componentPropsToRemove))} />
);

ImageComponent.propTypes = {
  alt: PropTypes.string,
};

ImageComponent.defaultProps = {
  alt: '',
};
