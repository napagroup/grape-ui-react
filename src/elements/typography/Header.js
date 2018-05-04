import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSize from '../../assets/json/fontSize.json';

export const Header = props => {
  const { ...otherProps } = props;
  const fontSizeBase = fontSize.h1;
  const HeaderPrimitive = styled.h1`
    ${textStylesBase(fontSizeBase)}
  `;
  return <HeaderPrimitive {...otherProps} />;
};
