import React from 'react';
import PropTypes from 'prop-types';
import { control, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = [
  'formStyle',
  'labelText',
  'plainText',
  'validationError',
  'email',
  'password',
  ...Object.keys(control.propTypes),
  ...Object.keys(typography.propTypes),
];

const getInputType = props => {
  if (props.password) {
    return 'password';
  }
  if (props.email) {
    return 'email';
  }
  return 'text';
};
export const TextInputComponent = ({ plainText, ...props }) => (
  <input readOnly={plainText} tabIndex={plainText ? '-1' : '0'} type={getInputType(props)} {...removeSomeProps(props, propsToTrim)} />
);
TextInputComponent.propTypes = {
  email: PropTypes.bool,
  password: PropTypes.bool,
  plainText: PropTypes.bool,
};

TextInputComponent.defaultProps = {
  email: false,
  password: false,
  plainText: false,
};
