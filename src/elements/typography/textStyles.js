import PropTypes from 'prop-types';
import { css } from 'styled-components';
import sizeVariations from '../../assets/json/fontSize.json'

export const textStylesBase = props => {
  const { italic, lg, sm, } = props;
  let fontSize = sizeVariations.base;
  if (lg) {
    fontSize = sizeVariations.lg
  } else if (sm) {
    fontSize = sizeVariations.sm
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
