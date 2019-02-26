import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  border,
  borderWidth,
  bottom,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  left,
  letterSpacing,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  ratio,
  right,
  size,
  space,
  textAlign,
  top,
  width,
  zIndex,
} from 'styled-system';
import {
  getFontSize,
  getColor,
} from 'src/elements/typography/textStyles';
import {
  backgroundColorForButton,
  bgColor,
  borderForButton,
  colorForButton,
  lineHeightForButton,
  positionForButton,
} from './utils';
import { ButtonComponent } from './component';

// TODO: For Ryan, please put the correct style into for contained, outline and raised here.
export const Button = styled(ButtonComponent)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${bgColor}
  ${borderForButton}
  ${borderWidth}
  ${bottom}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${getColor}
  ${getFontSize}
  ${height}
  ${justifyContent}
  ${left}
  ${letterSpacing}
  ${lineHeightForButton}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${positionForButton}
  ${ratio}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`;

Button.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  bgColor: PropTypes.string,
  ...border.propTypes,
  ...borderWidth.propTypes,
  ...bottom.propTypes,
  contained: PropTypes.bool,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...left.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  outline: PropTypes.bool,
  ...position.propTypes,
  raised: PropTypes.bool,
  ...ratio.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};

Button.defaultProps = {
  bgColor: 'inherit',
  contained: false,
  outline: false,
  raised: false,
};
