import styled from 'styled-components';
import {
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';
import { FlexComponent } from './component';

export const Flex = styled(FlexComponent)`
  display: flex;
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;
