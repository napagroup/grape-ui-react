import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSize from '../../assets/json/fontSize.json';

const Header = props => {
  const fontSizeBase = fontSize.h1;
  const HeaderPrimitive = styled.h1`
    ${textStylesBase}
  `;
  return HeaderPrimitive;
}

Header.h1 = Header;
Header.h2 = Header.withComponent('h2').extend`font-size: ${fontSize.h2};`;
Header.h3 = Header.withComponent('h3').extend`font-size: ${fontSize.h3};`;
Header.h4 = Header.withComponent('h4').extend`font-size: ${fontSize.h4};`;
Header.h5 = Header.withComponent('h5').extend`font-size: ${fontSize.h5};`;
Header.h6 = Header.withComponent('h6').extend`font-size: ${fontSize.h6};`;

export { Header };

