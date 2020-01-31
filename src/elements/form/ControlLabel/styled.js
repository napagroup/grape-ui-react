import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import {
  fontWeight,
  layout,
  position,
  space,
} from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  defaultControlStyles,
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
import { ControlLabelComponent } from './component';

const { fontSize: fontSizeSchema } = getGlobalStyles();

const colorLabel = props => colorCore({
  ...props,
  color: !props.validationError ? props.color : 'brandDanger',
});
const fontSizeLabel = props => fontSizeCore({ ...props, sm: true });
const ControlLabel = styled(ControlLabelComponent)`
  ${colorLabel}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeLabel}
  ${fontStyleCore}
  ${fontWeight}
  ${layout}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${position}
  ${space}
  ${textAlignCore}
  ${textDecorationCore}
`;

ControlLabel.propTypes = {
  bg: PropTypes.string,
  disabled: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

ControlLabel.defaultProps = {
  ...defaultStylesBase,
  bg: defaultControlStyles.bg,
  disabled: false,
  height: `${fontSizeSchema.sizeVariants.sm / 2}rem`,
  left: 2,
  lineHeight: 0.8,
  position: 'absolute',
  px: 2,
  top: '-1px',
  validationError: '',
};

/** @component */
export { ControlLabel };
