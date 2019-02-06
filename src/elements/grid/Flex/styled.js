import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
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
import { FlexComponent } from './component';

export const Flex = styled(FlexComponent)`
  display: flex;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${bottom}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${ratio}
  ${right}
  ${size}
  ${top}
  ${space}
  ${width}
  ${zIndex}
`;
