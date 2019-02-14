import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/elements/typography/textStyles';
import { control, defaultControlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';

export const TextInputComponent = ({ plainText, ...props }) => (
  <input readOnly={plainText} tabIndex={plainText ? '-1' : '0'} type="text" {...passThrough(TextInputComponent, props)} />
);
TextInputComponent.propTypes = {
  ...control.propTypes,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

TextInputComponent.defaultProps = {
  ...defaultControlStylesBase,
  validationError: '',
};

