import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';

const { grid: gridSchema } = getGlobalStyles();

export const Paragraph = props => {
  const { lead, ...otherProps } = props;
  let leadStyles = null;
  if (lead) {
    leadStyles = {
      fontWeight: '300',
      lg: true,
    };
  }
  const overrides = {
    ...otherProps,
    ...leadStyles,
  };
  const actualBase = textStylesBase(overrides);
  const ProtoParagraph = styled.p`
    ${actualBase}
    margin: 0 0 ${gridSchema.gutter};
  `;
  return <ProtoParagraph {...otherProps} />;
};

Paragraph.propTypes = {
  lead: PropTypes.bool,
};

Paragraph.defaultProps = {
  lead: false,
};
