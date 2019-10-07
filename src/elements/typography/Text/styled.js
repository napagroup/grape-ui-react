import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { TextComponent } from './component';

export const Text = styled(TextComponent)`
  ${colorCore}
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
};

Text.defaultProps = {
  ...defaultStylesBase,
};
