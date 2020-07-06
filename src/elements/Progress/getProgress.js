import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'src/elements/Progress';

export const getProgressDefaultProps = {
  progress: null,
  progressPlacement: 'top',
  progressProps: {},
  showProgress: false,
};

export const getProgressPropTypes = {
  progress: PropTypes.any,
  progressPlacement: PropTypes.oneOf([
    'bottom',
    'left',
    'right',
    'top',
  ]),
  progressProps: PropTypes.object,
  showProgress: PropTypes.bool,
};

export const getProgress = options => {
  const {
    progress,
    progressProps,
    showProgress,
  } = options;
  if (React.isValidElement(progress)) {
    return progress;
  }
  return (
    <Progress
      isHidden={!showProgress}
      {...progressProps}
    />
  );
};
