import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { typography } from 'src/utils/styledHelpers';

const propsToTrim = {
  ...typography.propTypes,
  activeColor: '',
  disabled: false,
  isRelative: false,
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
