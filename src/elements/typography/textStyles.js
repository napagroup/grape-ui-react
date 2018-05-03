import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const textStylesBase = props => {
  const { italic, } = props;
  const Primitive = css`
    line-height: 1.5;
    ${italic ? 'text-style: italic;' : ''}
  `;
  return Primitive;
};

textStylesBase.propTypes = {
  italic: PropTypes.bool,
};

textStylesBase.defaultProps = {
  italic: false,
};
