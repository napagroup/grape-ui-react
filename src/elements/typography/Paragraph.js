import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
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

const { grid: gridSchema } = getGlobalStyles();

const getParagraphFontSize = props => {
  const { lead } = props;
  return lead ? getFontSize({ ...props, lg: true }) : getFontSize(props);
};
const getParagraphFontWeight = props => {
  const { lead } = props;
  return lead ? getFontWeight({ ...props, fontWeight: '300' }) : getFontWeight(props);
};

const ParagraphComponent = ({ children, ...props }) => (
  <p {...passThrough(ParagraphComponent, props)}>
    {children}
  </p>
);
ParagraphComponent.propTypes = {
  children: PropTypes.any.isRequired,
  lead: PropTypes.bool,
  ...typography.propTypes,
};

ParagraphComponent.defaultProps = {
  lead: false,
};
const Paragraph = styled(ParagraphComponent)`
  ${getFontFamily}
  ${getParagraphFontSize}
  ${getParagraphFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  margin: 0 0 ${gridSchema.gutter};
  `;

Paragraph.propTypes = {
  ...typography.propTypes,
  lead: PropTypes.bool,
};

export { Paragraph };
