import PropTypes from 'prop-types';
import { css } from 'styled-components';
import * as fontSizeObject from '../../assets/json/fontSize.json'

export const textStylesBase = props => {
  const { fontSizeBase, italic, lg, sm, } = props;
  const fontSizeVariants = fontSizeObject.sizeVariants;
  let sizeVariant = fontSizeVariants.base;
  if (lg) {
    sizeVariant = fontSizeVariants.lg
  } else if (sm) {
    sizeVariant = fontSizeVariants.sm
  }
  const Primitive = css`
    font-size: calc(${fontSizeBase} * ${sizeVariant});
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
  `;
  return Primitive;
};

textStylesBase.propTypes = {
  fontSizeBase: PropTypes.string,
  italic: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
};

textStylesBase.defaultProps = {
  fontSizeBase: "1rem",
  italic: false,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
};
