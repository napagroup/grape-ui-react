import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
  typography,
} from './textStyles';
import { passThrough } from 'src/utils/componentHelpers';

const TextComponent = ({ children, ...props }) => (
  <span {...passThrough(TextComponent, props)}>
    {children}
  </span>
);
TextComponent.propTypes = {
  children: PropTypes.any.isRequired,
  ...typography.propTypes,
};

export const Text = styled(TextComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  `;

