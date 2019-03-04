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
import { getGlobalStyles } from 'src/global-styles';
import { AssistiveTextComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();
const padding = gridSchema.gutter;
const fontSizeAssistiveText = props => fontSizeCore({ ...props, sm: true });
export const AssistiveText = styled(AssistiveTextComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeAssistiveText}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  padding: 0 ${padding};
  `;
AssistiveText.propTypes = {
  ...typography.propTypes,
};

AssistiveText.defaultProps = {
  ...defaultStylesBase,
  color: 'gray',
};
