
import React from 'react';
import PropTypes from 'prop-types';
import {
  flexboxProps,
  layoutProps,
  positionProps,
  spaceProps,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  ...flexboxProps.propTypes,
  ...layoutProps.propTypes,
  ...positionProps.propTypes,
  ...spaceProps.propTypes,
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};
export const BoxComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);

BoxComponent.propTypes = {
  children: PropTypes.any,
};

BoxComponent.defaultProps = {
  children: null,
};
