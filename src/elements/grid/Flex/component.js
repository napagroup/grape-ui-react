import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  flexboxProps,
  layoutProps,
  positionProps,
  spaceProps,
} from 'src/utils/styledHelpers';

const propsToTrim = {
  ...flexboxProps.propTypes,
  ...layoutProps.propTypes,
  ...positionProps.propTypes,
  ...spaceProps.propTypes,
};

export const FlexComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);

FlexComponent.propTypes = {
  children: PropTypes.any,
};

FlexComponent.defaultProps = {
  children: null,
};
