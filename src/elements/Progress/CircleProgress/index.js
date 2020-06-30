import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { layout, space } from 'styled-system';
import { Hideable } from 'src/elements/utils';
import { makeColorResolver } from '../utils';

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

const StyledCircleBg = styled('circle')`
  fill: none;
  ${stroke};
`;

const StyledRootDet = styled('div')`
  transform: rotate(-90deg);
`;

const determinateCircularDash = props => keyframes`
  from {
    stroke-dashoffset: ${props.circumference};
  }
  to {
    stroke-dashoffset: ${0};
  }
`;

const DeterminateCircleFg = styled('circle')`
  animation: ${determinateCircularDash} 4.2s ease-in-out infinite;
  fill: none;
  ${stroke};
`;

const StyledRootInDet = styled('div')`
  animation: ${circularRotate} 2.4s linear infinite;
`;
const IndeterminateCircleFg = styled('circle')`
  animation: ${circularDash} 2.4s ease-in-out infinite;
  fill: none;
  ${stroke};
`;

const getCircleFg = isDeterminate => (isDeterminate ? DeterminateCircleFg : IndeterminateCircleFg);
const getStyledRoot = isDeterminate => (isDeterminate ? StyledRootDet : StyledRootInDet);

export const CircularProgress = props => {
  const {
    indicatorColor,
    hideTrack,
    isDeterminate,
    diameter,
    strokeWidth,
    trackColor,
  } = props;
  const radius = diameter / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const center = diameter / 2;
  const StyledRoot = getStyledRoot(isDeterminate);
  const CircleFg = getCircleFg(isDeterminate);
  return (
    <StyledRoot>
      <StyledSvg
        height={diameter}
        width={diameter}
      >
        <Hideable hide={hideTrack}>
          <StyledCircleBg
            circumference={circumference}
            cx={center}
            cy={center}
            r={radius}
            strokeColor={trackColor}
            strokeWidth={strokeWidth}
          />
        </Hideable>
        <CircleFg
          circumference={circumference}
          cx={center}
          cy={center}
          r={radius}
          strokeColor={indicatorColor}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
        />
      </StyledSvg>
    </StyledRoot>
  );
};

CircularProgress.propTypes = {
  diameter: PropTypes.number,
  hideTrack: PropTypes.bool,
  indicatorColor: PropTypes.string,
  isDeterminate: PropTypes.bool,
  strokeWidth: PropTypes.number,
  trackColor: PropTypes.string,
};

CircularProgress.defaultProps = {
  diameter: 35,
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  isDeterminate: false,
  strokeWidth: 5,
  trackColor: 'gray.light',
};
