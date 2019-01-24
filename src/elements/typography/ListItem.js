import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';
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

const { grid: { gutter } } = getGlobalStyles();
export const ListItem = styled.li`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  margin-bottom: ${getScaledSize(gutter, 0.25)};
  `;

ListItem.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};
