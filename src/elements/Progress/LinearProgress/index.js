import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  determinateKeyframes,
  indeterminateKeyframes,
  getProgressProps,
  makeColorResolver,
  progressBaseDefaultProps,
  progressBasePropTypes,
  styledSystemAnimation,
} from '../utils';
import { LineComponent, TrackComponent } from './component';

const backgroundIndicatorColor = makeColorResolver('background', 'indicatorColor');
const backgroundTrackColor = makeColorResolver('background', 'trackColor');

const Track = styled(TrackComponent)`${backgroundTrackColor}`;

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

const Line = styled(LineComponent)`
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
    indicatorPropsToTrim,
    trackColor,
    trackProps,
    trackPropsToTrim,
  } = props;
  return (
    <Track
      trackColor={
        getTrackColor({ hideTrack, trackColor })
      }
      {...trackProps}
      trackPropsToTrim={trackPropsToTrim}
    >
      <Line
        {...getProgressProps(props)}
        indicatorColor={indicatorColor}
        {...indicatorProps}
        indicatorPropsToTrim={indicatorPropsToTrim}
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
