import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/elements/typography/textStyles';
import { passThrough } from 'src/utils/componentHelpers';
import { control, defaultControlStylesBase } from '../ControlGroup/baseControlStyle';

export const TextInputComponent = ({ plainText, formStyle, ...props }) => ( // Make sure formStyle no going into input tag
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
