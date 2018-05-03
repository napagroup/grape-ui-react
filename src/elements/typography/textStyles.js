import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const textStylesBase = props => {
  const { italic, } = props;
  let fontSize = '100%';
  if (lg) { fontSize = '120%' } else if (sm) { fontSize = '80%' }
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
