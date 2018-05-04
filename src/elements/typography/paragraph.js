import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';

export const Paragraph = props => {
  const { ...otherProps } = props;
  const actualBase = textStylesBase(props);
  const ProtoParagraph = styled.p`
    ${actualBase}
    margin: 0 0 1rem;
  `;
  return <ProtoParagraph {...otherProps} />;
};
