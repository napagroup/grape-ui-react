import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';

const { grid: gridSchema } = getGlobalStyles();

export const ListItem = styled.li`
  ${textStylesBase}
  margin-bottom: ${getScaledSize(gridSchema.gutter, 0.25)};
`;
