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
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { PlainTextComponent } from './component';

export const PlainText = styled(PlainTextComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
`;
PlainText.propTypes = {
  ...typography.propTypes,
};

PlainText.defaultProps = {
  ...defaultStylesBase,
};
