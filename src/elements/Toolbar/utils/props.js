import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { resolveBoxShadow } from 'src/utils/styledHelpers';
import {
  getProgressDefaultProps,
  getProgressPropTypes,
} from 'src/elements/Progress';

export const toolbarPropTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...getProgressPropTypes,
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  containerComponent: PropTypes.node,
  /** Hides component */
  isHidden: PropTypes.bool,
  toolbarInnerProps: PropTypes.object,
};

export const toolbarDefaultProps = {
  ...getProgressDefaultProps,
  alignItems: 'center',
  boxShadow: resolveBoxShadow('01'),
  boxSizing: 'border-box',
  centerAreaProps: {
    flex: 1,
  },
  containerComponent: 'header',
  display: 'flex',
  flex: 'none',
  isHidden: false,
  justifyContent: 'center',
  minHeight: [48, 5, 64],
  progressPlacement: 'bottom',
  px: [3, null, 4],
  toolbarInnerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 960,
    width: 1,
  },
};
