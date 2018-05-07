import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSizeObject from '../../assets/json/fontSize.json';

export const Header = props => {
  const { ...otherProps } = props;
  const overrides = {
    ...props,
    fontSizeBase: fontSizeObject.h1,
  };
  const actualBase = textStylesBase({ overrides });
  const ProtoHeader = styled.h1`
    ${actualBase}
  `;
  ProtoHeader.h1 = ProtoHeader;
  ProtoHeader.h2 = ProtoHeader.withComponent('h2').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h2 })}`;
  ProtoHeader.h3 = ProtoHeader.withComponent('h3').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h3 })}`;
  ProtoHeader.h4 = ProtoHeader.withComponent('h4').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h4 })}`;
  ProtoHeader.h5 = ProtoHeader.withComponent('h5').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h5 })}`;
  ProtoHeader.h6 = ProtoHeader.withComponent('h6').extend`${textStylesBase({ fontSizeBase: fontSizeObject.h6 })}`;
  return <ProtoHeader {...otherProps} />;
};

//
// const Header = styled.h1`
//   ${actualBase}
// `;
