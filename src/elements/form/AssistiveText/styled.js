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
  spaceProps,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { AssistiveTextComponent } from './component';

const fontSizeAssistiveText = props => fontSizeCore({ ...props, sm: true });
export const AssistiveText = styled(AssistiveTextComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeAssistiveText}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${space}
  ${textAlignCore}
  ${textDecorationCore}
`;

AssistiveText.propTypes = {
  ...spaceProps.propTypes,
  ...typography.propTypes,
};

AssistiveText.defaultProps = {
  ...defaultStylesBase,
  color: 'gray',
  px: 3,
};
