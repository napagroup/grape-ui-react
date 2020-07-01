import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'src/elements/grid';
import {
  determinateKeyframes,
  indeterminateKeyframes,
  getProgressProps,
  makeColorResolver,
  progressBaseDefaultProps,
  progressBasePropTypes,
  styledSystemAnimation,
} from '../utils';

const backgroundIndicatorColor = makeColorResolver('background', 'indicatorColor');
const backgroundTrackColor = makeColorResolver('background', 'trackColor');

const Track = styled(Box)`${backgroundTrackColor}`;

Track.defaultProps = {
  height: 5,
  overflow: 'hidden',
};

const getAnimationName = props => {
  const {
    animationName,
    isDeterminate,
  } = props;
  if (animationName) {
    return animationName;
  }
  if (isDeterminate) {
    return determinateKeyframes();
  }
  return indeterminateKeyframes();
};

const Line = styled(Box)`
  ${backgroundIndicatorColor}
  animation-name: ${getAnimationName};
  ${styledSystemAnimation}
`;

Line.defaultProps = {
  height: '100%',
  width: 1,
};

const getTrackColor = props => (props.hideTrack ? 'transparent' : props.trackColor);

export const LinearProgress = props => {
  const {
    hideTrack,
    indicatorColor,
    indicatorProps,
    trackColor,
    trackProps,
  } = props;
  return (
    <Track
      trackColor={
        getTrackColor({ hideTrack, trackColor })
      }
      {...trackProps}
    >
      <Line
        {...getProgressProps(props)}
        indicatorColor={indicatorColor}
        {...indicatorProps}
      />
    </Track>
  );
};

LinearProgress.propTypes = {
  ...progressBasePropTypes,
  value: PropTypes.number,
};

LinearProgress.defaultProps = {
  ...progressBaseDefaultProps,
  total: 100,
  value: -1,
};
