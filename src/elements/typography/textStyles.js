import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const textStylesBase = props => {
  const { italic, lg, sm, } = props;
  const fontSize = '100%';
  // if (sm) {
  //   fontSize = '80%';
  // }
  // else if (lg) {
  //   fontSize = '120%';
  // }
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
  lg: false,
  sm: false,
};

