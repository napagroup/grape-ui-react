import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from './textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough } from 'src/utils/componentHelpers';

export const Text = props => {
  const overrides = {
    ...props,
    fontSizeBase: '100%',
  };
  const ProtoText = withBaseStyles(styled.span``, overrides);
  return <ProtoText {...passThrough(Text, props)} />;
};

Text.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

Text.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
