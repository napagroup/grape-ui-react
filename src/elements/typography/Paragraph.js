import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { passThrough } from 'src/utils/componentHelpers';

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
  return <ProtoParagraph {...passThrough(Paragraph, props)} />;
};

Paragraph.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lead: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

Paragraph.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lead: false,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
