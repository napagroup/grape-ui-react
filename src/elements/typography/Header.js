import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSizeObject from '../../assets/json/fontSize.json';

// export const Header = props => {
//   const { ...otherProps } = props;
//   const overrides = {
//     ...props,
//     fontSizeBase: fontSizeObject.h1,
//   };
//   
//   const ProtoHeader = styled.h1`
//     ${actualBase}
//   `;
//   return <ProtoHeader {...otherProps} />;

const actualBase = textStylesBase({ fontSizeBase: fontSizeObject.h1 });
const Header = styled.h1`
  ${actualBase}
`;

Header.h1 = Header;
Header.h2 = Header.withComponent('h2').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h2 })}`;
Header.h3 = Header.withComponent('h3').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h3 })}`;
Header.h4 = Header.withComponent('h4').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h4 })}`;
Header.h5 = Header.withComponent('h5').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h5 })}`;
Header.h6 = Header.withComponent('h6').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h6 })}`;

export { Header };