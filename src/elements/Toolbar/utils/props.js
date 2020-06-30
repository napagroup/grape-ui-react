import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { resolveBoxShadow } from 'src/utils/styledHelpers';

export const toolbarPropTypes = {
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
  /** Hides component */
  isHidden: PropTypes.bool,
  toolbarInnerProps: PropTypes.object,
};

export const toolbarDefaultProps = {
  alignItems: 'center',
  boxShadow: resolveBoxShadow('01'),
  boxSizing: 'border-box',
  centerAreaProps: {
    flex: 1,
  },
  display: 'flex',
  flex: 'none',
  isHidden: false,
  justifyContent: 'center',
  minHeight: [48, 56, 64],
  px: [3, null, 4],
  toolbarInnerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 960,
    width: 1,
  },
};
