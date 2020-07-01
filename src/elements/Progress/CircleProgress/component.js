
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultProgressPropsToTrim } from '../utils';

export const RootComponent = ({ children, ...props }) => (
  <Box {...removeSomeProps(props, defaultProgressPropsToTrim)}>
    {children}
  </Box>
);

RootComponent.propTypes = {
  children: PropTypes.any,
};

RootComponent.defaultProps = {
  children: null,
};

export const CircleComponent = ({ children, ...props }) => (
  <circle {...removeSomeProps(props, defaultProgressPropsToTrim)}>
    {children}
  </circle>
);

CircleComponent.propTypes = {
  children: PropTypes.any,
};

CircleComponent.defaultProps = {
  children: null,
};
