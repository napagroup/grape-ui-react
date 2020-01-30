import React from 'react';
import styled from 'styled-components';
import { fontWeight, layout, space } from 'styled-system';
import {
  colorCore,
  defaultControlStyles,
  defaultStylesBase,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  layoutProps,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { PlainTextComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();

const PlainTextStyledComponent = styled(PlainTextComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${layout}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${space}
  ${textAlignCore}
  ${textDecorationCore}
  > div {
    ${ellipsisCore}
  }
  box-sizing: border-box;
`;

PlainTextStyledComponent.propTypes = {
  ...layoutProps.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

PlainTextStyledComponent.defaultProps = {
  ...defaultStylesBase,
  pb: gridSchema.gutter || defaultControlStyles.padding,
  pl: gridSchema.gutter || defaultControlStyles.padding,
  pr: gridSchema.gutter || defaultControlStyles.padding,
  pt: gridSchema.gutter || defaultControlStyles.padding,
  width: 1,
};

export const PlainText = props => {
  const {
    formStyle,
    pb,
    pt,
    ...otherProps
  } = props;
  const paddingBottom = formStyle === 'filled' ? '0.5rem' : pb;
  const paddingTop = formStyle === 'filled' ? 'calc(0.7rem + 1px)' : pt;
  return (
    <PlainTextStyledComponent
      pb={paddingBottom}
      pt={paddingTop}
      {...otherProps}
    />
  );
};

PlainText.propTypes = {
  ...space.propTypes,
};

PlainText.defaultProps = {
  pb: gridSchema.gutter || defaultControlStyles.padding,
  pl: gridSchema.gutter || defaultControlStyles.padding,
  pr: gridSchema.gutter || defaultControlStyles.padding,
  pt: gridSchema.gutter || defaultControlStyles.padding,
};
