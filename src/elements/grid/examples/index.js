import styled from 'styled-components';
import { Box, Flex } from 'src/elements/grid';

const colors = `
  background: palevioletred;
  &:nth-of-type(2n) { background: darkorange; }
  &:nth-of-type(3n) { background: lightgoldenrodyellow; }
  &:nth-of-type(4n) { background: mediumseagreen; }
  &:nth-of-type(5n) { background: steelblue; }
  &:nth-of-type(6n) { background: rebeccapurple; }
  &:nth-of-type(7n) { background: indianred; }
  &:nth-of-type(8n) { background: orange; }
  &:nth-of-type(9n) { background: yellowgreen; }
  &:nth-of-type(10n) { background: lightseagreen; }
  &:nth-of-type(11n) { background: blueviolet; }
  &:nth-of-type(12n) { background: mediumpurple; }
`;

export const StyledBox = styled(Box)`${colors}`;
export const StyledFlex = styled(Flex)`${colors}`;

export const ElementOne = styled(StyledBox)``;
export const ElementTwo = styled(StyledBox)``;
export const ElementThree = styled(StyledBox)``;
export const ElementFour = styled(StyledBox)``;
export const ElementFive = styled(StyledBox)``;
export const ElementSix = styled(StyledBox)``;
export const ElementSeven = styled(StyledBox)``;
export const ElementEight = styled(StyledBox)``;

ElementOne.defaultProps = { height: 50 };
ElementTwo.defaultProps = { height: 60 };
ElementThree.defaultProps = { height: 70 };
ElementFour.defaultProps = { height: 80 };
ElementFive.defaultProps = { height: 90 };
ElementSix.defaultProps = { height: 100 };
ElementSeven.defaultProps = { height: 110 };
ElementEight.defaultProps = { height: 120 };
