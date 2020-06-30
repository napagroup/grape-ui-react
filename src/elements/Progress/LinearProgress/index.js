import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Box } from 'src/elements/grid';
import { makeColorResolver } from '../utils';

const backgroundIndicatorColor = makeColorResolver('background', 'indicatorColor');
const backgroundTrackColor = makeColorResolver('background', 'trackColor');

const determinate1 = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const indeterminate1 = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  50% {
    transform: translate(60%, 0);
  }
  65% {
    transform: translate(100%, 0);
  }
  65.1% {
    transform: translate(-100%, 100%);
  }
  65.2% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
`;

const Track = styled(Box)`${backgroundTrackColor}`;

Track.defaultProps = {
  height: 5,
  overflow: 'hidden',
};

const Line = styled(Box)`
  ${backgroundIndicatorColor}
  transition: transform 0.2s linear;
  transformOrigin: left;
  animation: ${props => (props.isDeterminate ? determinate1 : indeterminate1)} ${props => props.duration}s linear ${props => (props.loop ? 'infinite' : '')};
`;

Line.defaultProps = {
  height: '100%',
  width: 1,
};

const getTrackColor = props => (props.hideTrack ? 'transparent' : props.trackColor);

export const LinearProgress = props => {
  const {
    duration,
    hideTrack,
    indicatorColor,
    isDeterminate,
    loop,
    trackColor,
  } = props;
  return (
    <Track
      trackColor={
        getTrackColor({ hideTrack, trackColor })
      }
    >
      <Line
        duration={duration}
        indicatorColor={indicatorColor}
        isDeterminate={isDeterminate}
        loop={loop}
      />
    </Track>
  );
};

LinearProgress.propTypes = {
  duration: PropTypes.number,
  hideTrack: PropTypes.bool,
  indicatorColor: PropTypes.string,
  isDeterminate: PropTypes.bool,
  loop: PropTypes.bool,
  trackColor: PropTypes.string,
};

LinearProgress.defaultProps = {
  duration: 1.5,
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  isDeterminate: false,
  loop: true,
  trackColor: 'gray.light',
};
