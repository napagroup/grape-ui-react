import styled from 'styled-components';
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
} from 'src/elements/typography/textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { AssistiveTextComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();
const padding = gridSchema.gutter;
const fontSizeForAssistiveText = props => `${getFontSize({ ...props, sm: true })};`;
export const AssistiveText = styled(AssistiveTextComponent)`
  ${getColor}
  ${getFontFamily}
  ${fontSizeForAssistiveText}
  ${getFontStyle}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getTextAlign}
  ${getTextDecoration}
  padding: 0 ${padding};
  `;
AssistiveText.propTypes = {
};

AssistiveText.defaultProps = {
  color: 'gray',
};
