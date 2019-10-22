import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  layoutProps,
  positionProps,
  spaceProps,
  typography,
} from 'src/utils/styledHelpers';

const propsToTrim = {
  ...layoutProps.propTypes,
  ...positionProps.propTypes,
  ...spaceProps.propTypes,
  ...typography.propTypes,
  activeColor: '',
  disabled: false,
  validationError: '',
};
export const ControlLabelComponent = ({ children, ...props }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
  <label {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </label>
);
ControlLabelComponent.propTypes = {
  children: PropTypes.any,
};

ControlLabelComponent.defaultProps = {
  children: null,
};
