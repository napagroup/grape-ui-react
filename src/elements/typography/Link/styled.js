import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  resolveColor,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { LinkComponent } from './component';

const hoverStyle = props => `&:active {
  color: ${resolveColor(props.hoverStyle)};
  cursor: pointer;
 }`;

const Link = styled(LinkComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  &:hover,
  ${hoverStyle}
  `;

Link.propTypes = {
  ...typography.propTypes,
  hoverStyle: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  ...defaultStylesBase,
  color: 'brandLink',
  hoverStyle: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = Link;
export { Link };
