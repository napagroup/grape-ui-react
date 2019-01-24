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
} from './textStyles';

export const Text = styled.span`
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
