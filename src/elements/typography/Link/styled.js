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


const hoverStyle = props => `
  color: ${resolveColor(props.hoverColor, getGlobalOverrides(props))};
  cursor: pointer;
`;

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
  &:active {
    ${hoverStyle}
  }
`;

Link.propTypes = {
  ...typography.propTypes,
  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: PropTypes.string,
  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: PropTypes.string,
};

Link.defaultProps = {
  ...defaultStylesBase,
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = Link;

/** @component */
export { Link };
