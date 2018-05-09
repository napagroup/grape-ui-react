import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as gridSchema from '../../assets/json/grid.json';

export const Paragraph = props => {
  const { lead, ...otherProps } = props;
  let leadStyles = null;
  if (lead) {
    leadStyles = {
      fontWeight: '300',
      lg: true,
    }
  };
  const overrides = {
    ...otherProps,
    ...leadStyles
  };
  const actualBase = textStylesBase(overrides);
  const ProtoParagraph = styled.p`
    ${actualBase}
    margin: 0 0 ${gridSchema.gutter};
  `;
  return <ProtoParagraph {...otherProps} />;
};
