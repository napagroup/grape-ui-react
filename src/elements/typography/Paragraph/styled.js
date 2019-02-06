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
} from '../textStyles';
import { ParagraphComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();

const getParagraphFontSize = props => {
  const { lead } = props;
  return lead ? getFontSize({ ...props, lg: true }) : getFontSize(props);
};
const getParagraphFontWeight = props => {
  const { lead } = props;
  return lead ? getFontWeight({ ...props, fontWeight: '300' }) : getFontWeight(props);
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

Paragraph.defaultProps = {
  lead: false,
};
export { Paragraph };
