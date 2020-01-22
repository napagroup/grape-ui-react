import styled from 'styled-components';
import {
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';
import { BoxComponent } from './component';

const Box = styled(BoxComponent)`
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

/** @component */
export { Box };
