import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as gridSchema from '../../assets/json/grid.json';

export const Paragraph = props => {
  const { ...otherProps } = props;
  const actualBase = textStylesBase(props);
  const ProtoParagraph = styled.p`
    ${actualBase}
    margin: 0 0 ${gridSchema.gutter};
  `;
  return <ProtoParagraph {...otherProps} />;
};
