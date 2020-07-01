
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultProgressPropsToTrim } from '../utils';

export const TrackComponent = ({ children, ...props }) => (
  <Box {...removeSomeProps(props, defaultProgressPropsToTrim)}>
    {children}
  </Box>
);

TrackComponent.propTypes = {
  children: PropTypes.any,
};

TrackComponent.defaultProps = {
  children: null,
};

export const LineComponent = ({ children, ...props }) => (
  <Box {...removeSomeProps(props, defaultProgressPropsToTrim)}>
    {children}
  </Box>
);

LineComponent.propTypes = {
  children: PropTypes.any,
};

LineComponent.defaultProps = {
  children: null,
};
