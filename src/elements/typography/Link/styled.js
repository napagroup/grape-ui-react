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
import { withHideable } from 'src/elements/utils/Hideable';
import { LinkComponent } from './component';

const hoverStyle = props => `
  color: ${resolveColor(props.hoverColor, getGlobalOverrides(props))};
  cursor: pointer;
`;

const Link = styled(withHideable(LinkComponent))`
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
  /** Define properties for an email.  Fill in props and the control will generate the proper string. */
  emailHref: PropTypes.shape({
    /** Sets the BCC line. Can be comma-seperatred list. */
    bcc: PropTypes.string,
    /** Sets the Body. */
    body: PropTypes.string,
    /** Sets the CC line. Can be comma-seperatred list. */
    cc: PropTypes.string,
    /** Sets the Subject Line. */
    subject: PropTypes.string,
    /** Sets who to send it to. Can be comma-seperatred list. */
    to: PropTypes.string,
  }),
  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: PropTypes.string,
  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: PropTypes.string,
};

Link.propTypes = {
  /** Hides component */
  isHidden: PropTypes.bool,
};

Link.defaultProps = {
  ...defaultStylesBase,
  color: 'brandLink',
  emailHref: {},
  hoverColor: 'brandLinkHover',
  isHidden: false,
  textDecoration: 'none',
};

Link.Router = Link;

/** @component */
export { Link };
