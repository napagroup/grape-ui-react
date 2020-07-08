import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
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
  scaleFont,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { withHideable } from 'src/elements/utils/Hideable';
import { ListItemComponent } from './component';

const { grid: { gutter } } = getGlobalStyles();

const ListItem = styled(withHideable(ListItemComponent))`
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${space}
  ${textAlignCore}
  ${textDecorationCore}
`;

ListItem.propTypes = {
  ...typography.propTypes,
  /** Hides component */
  isHidden: PropTypes.bool,
};

ListItem.defaultProps = {
  ...defaultStylesBase,
  isHidden: false,
  mb: scaleFont(gutter, 0.25),
};

/** @component */
export { ListItem };
