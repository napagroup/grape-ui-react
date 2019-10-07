import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import { getGlobalOverrides } from 'src/global-styles';
import {
  colorCore,
  defaultStylesBase,
  ellipsisCore,
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
  color: ${resolveColor(props.hoverStyle, getGlobalOverrides(props))};
  cursor: pointer;
}`;

const Link = styled(LinkComponent)`
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${space}
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
