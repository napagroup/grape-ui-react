import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';

export const Text = props => {
  const { ...otherProps } = props;
  const overrides = {
    ...otherProps,
    fontSizeBase: '100%',
  };
  const actualBase = textStylesBase(overrides);
  const ProtoText = styled.span`
    ${actualBase}
  `;
  return <ProtoText {...otherProps} />;
};
