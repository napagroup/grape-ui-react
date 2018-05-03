import PropTypes from 'prop-types';
import { css } from 'styled-components';

export const textStylesBase = css`
  line-height: 1.5;
  ${props => props.italic ? 'font-style: italic;' : ''}
`;
