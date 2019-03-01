import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  border,
  borderWidth,
  bottom,
  buttonStyle,
  color,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  fontSize,
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
  borderForButton,
  lineHeightForButton,
  positionForButton,
} from './utils';
import { ButtonComponent } from './component';
import { colorCore } from 'src/utils/styledHelpers';

// TODO: For Ryan, please put the correct style into for contained, outline and raised here.
export const Button = styled(ButtonComponent)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${colorCore}
  ${borderForButton}
  ${borderWidth}
  ${bottom}
  ${buttonStyle}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${fontSize}
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
  ...border.propTypes,
  ...borderWidth.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  contained: PropTypes.bool,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontSize.propTypes,
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
  contained: false,
  outline: false,
  raised: false,
};
