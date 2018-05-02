import styled from 'styled-components';
import { textStylesBaseFactory } from './textStyles';

const Header = styled.h1`
  ${textStyleBaseFactory({textStyleBaseElementType: 'h1'})}
`;

export { Header };
