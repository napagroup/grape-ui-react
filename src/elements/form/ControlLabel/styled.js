import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  defaultControlStyles,
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

const { grid: gridSchema } = getGlobalStyles();

const padding = getScaledSize(gridSchema.gutter, 0.5);
const colorLabel = props => colorCore({
  ...props,
  color: !props.validationError ? props.color : 'brandDanger',
});
const fontSizeLabel = props => fontSizeCore({ ...props, sm: true });
const positionStyle = props => `position: ${props.isRelative ? 'relative' : 'absolute'};`;
const top = props => (props.isRelative ? '' : `top: -${padding};`);
export const ControlLabel = styled(ControlLabelComponent)`
  ${colorLabel}
  ${fontFamilyCore}
  ${fontSizeLabel}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  left: ${padding};
  padding: 0 ${padding};
  ${top};
  ${positionStyle}
`;

ControlLabel.propTypes = {
  bg: PropTypes.string,
  disabled: PropTypes.bool,
  isRelative: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

ControlLabel.defaultProps = {
  bg: defaultControlStyles.bg,
  disabled: false,
  isRelative: false,
  validationError: '',
};
