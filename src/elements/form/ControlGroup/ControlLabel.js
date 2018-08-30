import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';

const { grid: gridSchema } = getGlobalStyles();

const padding = getScaledSize(gridSchema.gutter, 0.5);

export const ControlLabel = props => {
  const { validationError, color } = props;
  const overrides = {
    ...props,
    sm: true,
    color: !validationError ? color : 'brandDanger',
  };
  const controlLabelStyle = `
    position: absolute;
    padding: 0 ${padding};
    background-color: white;
    top: -${padding};
    left: ${padding};
  `;
  const ProtoControlLabel = withBaseStyles(styled.label`${controlLabelStyle}`, overrides);
  return <ProtoControlLabel {...passThrough(ControlLabel, props)} />;
};

ControlLabel.propTypes = {
  color: PropTypes.string,
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
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  validationError: '',
};
