import styled from 'styled-components';
import {
  bottom,
  display,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  ratio,
  right,
  size,
  space,
  top,
  width,
  zIndex,
} from 'styled-system';
import { BoxComponent } from './component';

export const Box = styled(BoxComponent)`
  ${bottom}
  ${display}
  ${left}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${ratio}
  ${right}
  ${top}
  ${size}
  ${space}
  ${width}
  ${zIndex}
`;
