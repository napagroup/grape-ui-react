import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from '../utils';
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
  typography,
} from '../textStyles';
import { ListItemComponent } from './component';

const { grid: { gutter } } = getGlobalStyles();

export const ListItem = styled(ListItemComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  margin-bottom: ${getScaledSize(gutter, 0.25)};
  `;

ListItem.propTypes = {
  ...typography.propTypes,
};
