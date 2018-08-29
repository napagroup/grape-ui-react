import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';

const { grid: gridSchema } = getGlobalStyles();

const padding = gridSchema.gutter;

export const ControlLabel = props => {
  const overrides = {
    ...props,
    sm: true,
  };
  const controlLabelStyle = `
    position: absolute;
    padding: 0 ${padding};
    background-color: white;
    top: ${padding};
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
};
