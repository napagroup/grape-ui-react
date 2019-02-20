import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';
import { resolveColor } from 'src/utils/componentHelpers';
import { defaultControlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
  typography,
} from 'src/elements/typography/textStyles';
import { ControlLabelComponent } from './component';

const { grid: gridSchema } = getGlobalStyles();

const padding = getScaledSize(gridSchema.gutter, 0.5);
const bgColor = props => `background-color: ${resolveColor(props.bgColor)};`;
const colorForLabel = props => `${getColor({
  ...props,
  color: !props.validationError ? props.color : 'brandDanger',
})};`;
const fontSizeForLabel = props => `${getFontSize({ ...props, sm: true })};`;
const positionStyle = props => `position: ${props.isRelative ? 'relative' : 'absolute'};`;
const topStyle = props => (props.isRelative ? '' : `top ${padding};`);
export const ControlLabel = styled(ControlLabelComponent)`
  ${bgColor}
  ${colorForLabel}
  ${getFontFamily}
  ${fontSizeForLabel}
  ${getFontStyle}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getTextAlign}
  ${getTextDecoration}
  left: ${padding};
  padding: 0 ${padding};
  ${topStyle};
  ${positionStyle}
`;

ControlLabel.propTypes = {
  bgColor: PropTypes.string,
  disabled: PropTypes.bool,
  isRelative: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

ControlLabel.defaultProps = {
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  isRelative: false,
  validationError: '',
};
