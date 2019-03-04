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
  defaultTextStylesBase,
  typography,
} from 'src/elements/typography/textStyles';
import { PlainTextComponent } from './component';

export const PlainText = styled(PlainTextComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
`;
PlainText.propTypes = {
  ...typography.propTypes,
};

PlainText.defaultProps = {
  ...defaultTextStylesBase,
};
