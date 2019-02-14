import React from 'react';
import PropTypes from 'prop-types';
import { passThrough } from 'src/utils/componentHelpers';
import { defaultControlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
import { typography } from 'src/elements/typography/textStyles';

export const ControlLabelComponent = ({ children, ...props }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label {...passThrough(ControlLabelComponent, props)}>
    {children}
  </label>);
ControlLabelComponent.propTypes = {
  activeColor: PropTypes.string,
  bgColor: PropTypes.string,
  disabled: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

ControlLabelComponent.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: '',
};
