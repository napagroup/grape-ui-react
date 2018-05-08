import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as gridSchema from '../../assets/json/grid.json';

export const ListItem = styled.li`
  ${textStylesBase}
  margin-bottom: calc(${gridSchema.gutter} / 4);
`;
