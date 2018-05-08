import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSizeSchema from '../../assets/json/fontSize.json';

const headerFactory = (props, headerTag = 'h1') => {
  const { ...otherProps } = props;
  const overrides = {
    ...props,
    fontSizeBase: fontSizeSchema[headerTag],
  };
  const baseStyles = textStylesBase(overrides);
  const Primitive = styled[headerTag]`
    ${baseStyles}
  `;
  return <Primitive {...otherProps} />;
};

const Header = props => headerFactory(props);

Header.h1 = Header;
Header.h2 = props => headerFactory(props, 'h2');
Header.h3 = props => headerFactory(props, 'h3');
Header.h4 = props => headerFactory(props, 'h4');
Header.h5 = props => headerFactory(props, 'h5');
Header.h6 = props => headerFactory(props, 'h6');
export { Header };
