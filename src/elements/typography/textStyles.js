import PropTypes from 'prop-types';
import { css } from 'styled-components';
import * as fontSizeObject from '../../assets/json/fontSize.json'

export const textStylesBase = props => {
  const { italic, lg, sm } = props;
  const fontSizeVariants = fontSizeObject.sizeVariants;
  let fontSize = fontSizeVariants.base;
  if (lg) {
    fontSize = fontSizeVariants.lg;
  } else if (sm) {
    fontSize = fontSizeVariants.sm;
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
