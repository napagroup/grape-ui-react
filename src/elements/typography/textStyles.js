import PropTypes from 'prop-types';
import { css } from 'styled-components';
import * as fontSizeArray from '../../assets/json/fontSize.json'

export const textStylesBase = props => {
  const { italic, lg, sm, } = props;
  const sizeActual = fontSizeArray.sizeVariants;
  let fontSize = sizeActual.base;
  if (lg) {
    fontSize = sizeActual.lg
  } else if (sm) {
    fontSize = sizeActual.sm
  }
  const Primitive = css`
    font-size: ${fontSize};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
  `;
  return Primitive;
};

textStylesBase.propTypes = {
  italic: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
};

textStylesBase.defaultProps = {
  italic: false,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
};
