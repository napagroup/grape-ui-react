import PropTypes from 'prop-types';
import styled from 'styled-components';
import { resolveColor } from 'src/utils/componentHelpers';
import { LinkComponent } from './component';

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

const getHoverColor = props => `&:active {
  color: ${resolveColor(props.hoverColor)};
 }`;

const Link = styled(LinkComponent)`
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
  ...typography.propTypes,
  hoverColor: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = Link;
export { Link };
