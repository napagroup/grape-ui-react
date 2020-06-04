import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
// import { resolveBoxShadow } from 'src/utils/styledHelpers';

export const cardPropTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  cardImageProps: PropTypes.object,
  cardInnerProps: PropTypes.object,
};

export const cardImageProps = {
  display: 'block',
};

export const cardDefaultProps = {
  border: '1px solid #ddd',
  borderRadius: 4,
  cardImageProps: { ...cardImageProps },
  mb: [1, null, 2],
  p: [2, null, 3],
};
