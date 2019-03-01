import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
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

const marginBottom = props => `margin-bottom: ${scaleFont(gutter, 0.25)}`;

export const ListItem = styled(ListItemComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${marginBottom}
`;

ListItem.propTypes = {
  ...typography.propTypes,
};

ListItem.defaultProps = {
  ...defaultStylesBase,
};
