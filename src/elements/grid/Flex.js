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

export const Flex = styled.div`
  display: flex;
  ${space}
  ${display}
  ${width}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${maxWidth}
  ${minWidth}
  ${position}
  ${size}
  ${ratio}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${justifyContent}
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
`;
Flex.propTypes = {
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...width.propTypes,
};
