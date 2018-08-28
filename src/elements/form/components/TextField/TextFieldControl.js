import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from '../../../typography/textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough } from 'src/utils/componentHelpers';

export const TextFieldControl = props => {
  const overrides = {
    ...props,
    sm: true,
  };
  const ProtoTextFieldControl = withBaseStyles(styled.input``, overrides);
  return <ProtoTextFieldControl {...passThrough(TextFieldControl, props)} />;
};

TextFieldControl.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

TextFieldControl.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
