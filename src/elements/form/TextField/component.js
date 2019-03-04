import React from 'react';
import PropTypes from 'prop-types';
import { control, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = [
  'formStyle',
  'plainText',
  'validationError',
  ...Object.keys(control.propTypes),
  ...Object.keys(typography.propTypes),
];

export const TextInputComponent = ({ plainText, ...props }) => (
  <input readOnly={plainText} tabIndex={plainText ? '-1' : '0'} type="text" {...removeSomeProps(props, propsToTrim)} />
);
TextInputComponent.propTypes = {
  plainText: PropTypes.bool,
};

TextInputComponent.defaultProps = {
  plainText: false,
};
