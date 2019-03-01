import PropTypes from 'prop-types';
import {
  color,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
} from 'styled-system';

export const typography = {
  propTypes: {
    ...color.propTypes,
    ...fontFamily.propTypes,
    ...fontWeight.propTypes,
    ...fontSize.propTypes,
    italic: PropTypes.bool,
    kerning: PropTypes.string,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    lg: PropTypes.bool,
    sm: PropTypes.bool,
    textAlign: PropTypes.string,
    textDecoration: PropTypes.string,
  },
};
