import styled from 'styled-components';
import { fontWeight, layout, space } from 'styled-system';
import {
  colorCore,
  defaultControlStyles,
  defaultStylesBase,
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

export const PlainText = styled(PlainTextComponent)`
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
`;

PlainText.propTypes = {
  ...layoutProps.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

PlainText.defaultProps = {
  ...defaultStylesBase,
  pb: gridSchema.gutter || defaultControlStyles.padding,
  pl: gridSchema.gutter || defaultControlStyles.padding,
  pr: gridSchema.gutter || defaultControlStyles.padding,
  pt: gridSchema.gutter || defaultControlStyles.padding,
  width: 1,
};
