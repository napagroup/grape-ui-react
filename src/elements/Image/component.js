import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Img from 'react-image';
import {
  layoutProps,
  spaceProps,
} from 'src/utils/styledHelpers';

const componentPropsToRemove = {
  ...layoutProps.propTypes,
  ...spaceProps.propTypes,
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
