import styled from 'styled-components';
import {
  layout,
  position,
  space,
} from 'styled-system';
import { BoxComponent } from './component';

const Box = styled(BoxComponent)`
  ${layout}
  ${position}
  ${space}
`;

/** @component */
export { Box };
