import PropTypes from 'prop-types';
import { getAnimationIterationCount } from './styledHelpers';

export const getProgressProps = props => {
  const {
    animation,
    animationDelay,
    animationDirection,
    animationDuration,
    animationFillMode,
    animationName,
    animationPlayState,
    animationTimingFunction,
    circumference,
    isDeterminate,
    loop,
    progressType,
    total,
    value,
  } = props;
  if (progressType === 'linear' && value >= 0) {
    return { width: value / total };
  }
  if (progressType === 'circular' && value >= 0) {
    return { strokeDashoffset: `${circumference - ((value / total) * circumference)}px` };
  }
  return {
    animation,
    animationDelay,
    animationDirection,
    animationDuration,
    animationFillMode,
    animationIterationCount: getAnimationIterationCount(props),
    animationName,
    animationPlayState,
    animationTimingFunction,
    isDeterminate,
    loop,
  };
};

export const progressBasePropTypes = {
  animation: PropTypes.any,
  animationDelay: PropTypes.any,
  animationDirection: PropTypes.any,
  animationDuration: PropTypes.any,
  animationFillMode: PropTypes.any,
  animationIterationCount: PropTypes.any,
  animationName: PropTypes.any,
  animationPlayState: PropTypes.any,
  animationTimingFunction: PropTypes.any,
  hideTrack: PropTypes.bool,
  indicatorColor: PropTypes.string,
  indicatorProps: PropTypes.object,
  isDeterminate: PropTypes.bool,
  loop: PropTypes.bool,
  total: PropTypes.number,
  trackColor: PropTypes.string,
  trackProps: PropTypes.object,
  value: PropTypes.number,
};

export const progressBaseDefaultProps = {
  animation: '',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '1.5s',
  animationFillMode: 'none',
  animationIterationCount: '',
  animationName: '',
  animationPlayState: 'running',
  animationTimingFunction: 'linear',
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  indicatorProps: {},
  isDeterminate: false,
  loop: true,
  total: 100,
  trackColor: 'gray.light',
  trackProps: {},
  value: -1,
};

export const defaultProgressPropsToTrim = [
  ...Object.keys(progressBaseDefaultProps),
  'strokeColor',
];
