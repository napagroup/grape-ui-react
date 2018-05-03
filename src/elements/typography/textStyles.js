import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const textStylesBase = css`
  line-height: 1.5;
  ${italic ? 'text-style: italic;' : ''}
`;

textStylesBase.propTypes = {
  italic: PropTypes.bool,
};

textStylesBase.defaultProps = {
  italic: false,
};
