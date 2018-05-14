import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';

const { grid: gridSchema } = getGlobalStyles();

export const ListItem = styled.li`
  ${textStylesBase}
  margin-bottom: calc(${gridSchema.gutter} / 4);
`;
