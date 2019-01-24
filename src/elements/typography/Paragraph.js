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
} from './textStyles';

const { grid: gridSchema } = getGlobalStyles();

const getParagraphFontSize = props => {
  const { lead } = props;
  return lead ? getFontSize({ ...props, lg: true }) : getFontSize(props);
};
const getParagraphFontWeight = props => {
  const { lead } = props;
  return lead ? getFontWeight({ ...props, fontWeight: '300' }) : getFontWeight(props);
};
const Paragraph = styled.p`
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
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lead: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

export { Paragraph };
