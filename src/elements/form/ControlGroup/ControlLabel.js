import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';
import { defaultControlStylesBase } from './baseControlStyle';

const { grid: gridSchema } = getGlobalStyles();

const padding = getScaledSize(gridSchema.gutter, 0.5);

export const ControlLabel = props => {
  const { bgColor, color, validationError } = props;
  const overrides = {
    ...props,
    color: !validationError ? color : 'brandDanger',
    sm: true,
  };
  const controlLabelStyle = `
    background-color: ${bgColor};
    left: ${padding};
    padding: 0 ${padding};
    position: absolute;
    top: -${padding};
  `;
  const ProtoControlLabel = withBaseStyles(styled.label`${controlLabelStyle}`, overrides);
  return <ProtoControlLabel {...passThrough(ControlLabel, props)} />;
};

ControlLabel.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  validationError: PropTypes.string,
};

ControlLabel.defaultProps = {
  bgColor: defaultControlStylesBase.bgColor,
  color: defaultTextStylesBase.color,
  disabled: false,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  validationError: '',
};
