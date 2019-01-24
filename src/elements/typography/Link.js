import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveColor } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

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

const getHoverColor = props => `&:active {
  color: ${resolveColor(props.hoverColor)};
 }`;

const Link = styled.a`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  &:hover,
  ${getHoverColor}
  `;
const StyledReactRouterLink = styled(ReactRouterLink)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  &:hover,
  ${getHoverColor}
  `;

Link.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  hoverColor: PropTypes.string,
  italic: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

Link.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};


StyledReactRouterLink.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  hoverColor: PropTypes.string,
  italic: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  to: PropTypes.string,
};

StyledReactRouterLink.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = StyledReactRouterLink;
export { Link, StyledReactRouterLink };
