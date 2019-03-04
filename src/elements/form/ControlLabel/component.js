import React from 'react';
import PropTypes from 'prop-types';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { defaultControlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
import { typography } from 'src/elements/typography/textStyles';

export const ControlLabelComponent = ({ children, ...props }) => (
  /* eslint-disable jsx-a11y/label-has-associated-control */
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label {...passThrough(ControlLabelComponent, removeSomeProps(props, ['isRelative']))}>
    {children}
  </label>
);
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
