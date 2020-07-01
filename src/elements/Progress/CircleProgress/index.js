import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
  layout,
  space,
  system,
} from 'styled-system';
import {
  getAnimationIterationCount,
  getProgressProps,
  makeColorResolver,
  progressBaseDefaultProps,
  progressBasePropTypes,
  styledSystemAnimation,
} from '../utils';
import { CircleComponent, RootComponent } from './component';

const stroke = makeColorResolver('stroke', 'strokeColor');

const circularRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const circularDash = props => keyframes`
  from {
    stroke-dashoffset: ${props.circumference};
  }
  to {
    stroke-dashoffset: ${-1 * props.circumference};
  }
`;

const StyledSvg = styled('svg')`
  ${layout}
  ${space}
`;

StyledSvg.defaultProps = {
  display: 'block',
  m: 'auto',
  maxWidth: '100%',
  overflow: 'hidden',
};

const Track = styled(CircleComponent)`
  fill: none;
  ${stroke};
`;

const StyledRoot = styled(RootComponent)`
  animation-name: ${circularRotate};
  ${system({ transform: true })}
  ${styledSystemAnimation}
`;

const determinateCircularDash = props => keyframes`
  from {
    stroke-dashoffset: ${props.circumference};
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const getCircleAnimationName = props => {
  const { animationName, isDeterminate } = props;
  if (animationName) {
    return animationName;
  }
  if (isDeterminate) {
    return determinateCircularDash;
  }
  return circularDash;
};

const Circle = styled(Track)`
  animation-name: ${getCircleAnimationName};
  ${system({ strokeDashoffset: true })}
  ${styledSystemAnimation}
`;

const getStyledRootProps = props => {
  const {
    animationDuration,
    animationTimingFunction,
    isDeterminate,
    value,
  } = props;
  if (isDeterminate || value >= 0) {
    return { transform: 'rotate(-90deg)' };
  }
  return {
    animationDuration,
    animationIterationCount: getAnimationIterationCount(props),
    animationTimingFunction,
  };
};

const getTrackColor = props => (props.hideTrack ? 'transparent' : props.trackColor);

export const CircularProgress = props => {
  const {
    diameter,
    indicatorColor,
    indicatorProps,
    strokeWidth,
    trackProps,
  } = props;

  const centerMath = diameter / 2;
  const radiusMath = centerMath - strokeWidth / 2;
  const circumferenceMath = 2 * Math.PI * radiusMath;

  const baseCircleProps = {
    circumference: circumferenceMath,
    cx: centerMath,
    cy: centerMath,
    r: radiusMath,
    strokeWidth,
  };

  const progressProps = {
    ...baseCircleProps,
    ...props,
  };

  return (
    <StyledRoot {...getStyledRootProps(props)}>
      <StyledSvg
        height={diameter}
        width={diameter}
      >
        <Track
          {...baseCircleProps}
          strokeColor={getTrackColor(props)}
          {...trackProps}
        />
        <Circle
          {...baseCircleProps}
          {...getProgressProps(progressProps)}
          strokeColor={indicatorColor}
          strokeDasharray={circumferenceMath}
          {...indicatorProps}
        />
      </StyledSvg>
    </StyledRoot>
  );
};

CircularProgress.propTypes = {
  ...progressBasePropTypes,
  diameter: PropTypes.number,
  strokeWidth: PropTypes.number,
};

CircularProgress.defaultProps = {
  ...progressBaseDefaultProps,
  diameter: 35,
  strokeWidth: 5,
};
