import styled from 'styled-components';
import {
  background,
  border,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';
import { FlexComponent } from './component';

const Flex = styled(FlexComponent)`
  ${background}
  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

Flex.defaultProps = {
  display: 'flex',
};

/** @component */
export { Flex };
