import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { withHideable } from 'src/elements/utils/Hideable';
import { TextComponent } from './component';

const Text = styled(withHideable(TextComponent))`
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${space}
`;

Text.propTypes = {
  ...typography.propTypes,
  /** Hides component */
  isHidden: PropTypes.bool,
};

Text.defaultProps = {
  ...defaultStylesBase,
  isHidden: false,
};

/** @component */
export { Text };
