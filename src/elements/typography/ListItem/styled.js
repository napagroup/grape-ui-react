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
import { ListItemComponent } from './component';

const { grid: { gutter } } = getGlobalStyles();

export const ListItem = styled(ListItemComponent)`
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
};

ListItem.defaultProps = {
  ...defaultStylesBase,
  mb: scaleFont(gutter, 0.25),
};
