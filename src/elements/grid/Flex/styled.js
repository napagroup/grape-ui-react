import styled from 'styled-components';
import {
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';
import { FlexComponent } from './component';

const Flex = styled(FlexComponent)`
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

Flex.defaultProps = {
  display: 'flex',
};

/** @component */
export { Flex };
