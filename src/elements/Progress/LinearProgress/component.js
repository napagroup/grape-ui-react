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

export const LineComponent = ({ children, ...props }) => {
  const { indicatorPropsToTrim, trackPropsToTrim } = props;
  const propsToTrim = [
    ...defaultProgressPropsToTrim,
    ...indicatorPropsToTrim,
    ...trackPropsToTrim,
  ];
  return (
    <Box {...removeSomeProps(props, propsToTrim)}>
      {children}
    </Box>
  );
};

LineComponent.propTypes = {
  children: PropTypes.any,
  indicatorPropsToTrim: PropTypes.arrayOf(PropTypes.string),
  trackPropsToTrim: PropTypes.arrayOf(PropTypes.string),
};

LineComponent.defaultProps = {
  children: null,
  indicatorPropsToTrim: [],
  trackPropsToTrim: [],
};
