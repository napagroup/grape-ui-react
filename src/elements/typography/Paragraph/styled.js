import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import { getGlobalStyles } from 'src/global-styles';
import {
  colorCore,
  defaultStylesBase,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { withHideable } from 'src/elements/utils/Hideable';
import { ParagraphComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();

const fontSizeParagraph = props => {
  const { lead } = props;
  return lead ? fontSizeCore({ ...props, lg: true }) : fontSizeCore(props);
};
const fontWeightParagraph = props => {
  const { lead } = props;
  return lead ? fontWeight({ ...props, fontWeight: '300' }) : fontWeight(props);
};

const Paragraph = styled(withHideable(ParagraphComponent))`
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeParagraph}
  ${fontWeightParagraph}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${space}
`;

Paragraph.propTypes = {
  ...typography.propTypes,
  /** Hides component */
  isHidden: PropTypes.bool,
  /** Use the lead font size */
  lead: PropTypes.bool,
};

Paragraph.defaultProps = {
  ...defaultStylesBase,
  isHidden: false,
  lead: false,
  mb: gridSchema.gutter,
  mt: 0,
};

/** @component */
export { Paragraph };
