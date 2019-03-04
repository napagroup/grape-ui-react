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

const hoverColor = props => `&:active {
  color: ${resolveColor(props.hoverColor)};
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
  ${hoverColor}
  `;

Link.propTypes = {
  ...typography.propTypes,
  hoverColor: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  ...defaultStylesBase,
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = Link;
export { Link };
