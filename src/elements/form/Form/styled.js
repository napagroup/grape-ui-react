import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  bottom,
  display,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  size,
  space,
  top,
  width,
  zIndex,
} from 'styled-system';
import PropTypes from 'prop-types';
import { FormComponent } from './component';

export const Form = styled(FormComponent)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${bottom}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${right}
  ${size}
  ${top}
  ${space}
  ${width}
  ${zIndex}
`;

Form.propTypes = {
  formStyle: PropTypes.string,
  ...width.propTypes,
  ...display.propTypes,
};

Form.defaultProps = {
  formStyle: '',
};
