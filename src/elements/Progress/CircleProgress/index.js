import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
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
  display: block;
  margin: 20px auto;
  max-width: 100%;

`;

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
  return (
    <>
      <Hideable hide={!isDeterminate}>
        <StyledRootDet>
          <StyledSvg height={diameter} width={diameter}>
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
            <DeterminateCircleFg
              circumference={circumference}
              cx={center}
              cy={center}
              r={radius}
              strokeColor={indicatorColor}
              strokeDasharray={circumference}
              strokeWidth={strokeWidth}
            />
          </StyledSvg>
        </StyledRootDet>
      </Hideable>
      <Hideable hide={isDeterminate}>
        <StyledRootInDet>
          <StyledSvg height={diameter} width={diameter}>
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
            <IndeterminateCircleFg
              circumference={circumference}
              cx={center}
              cy={center}
              r={radius}
              strokeColor={indicatorColor}
              strokeDasharray={circumference}
              strokeWidth={strokeWidth}
            />
          </StyledSvg>
        </StyledRootInDet>
      </Hideable>
    </>
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
  indicatorColor: 'indigo.dark',
  isDeterminate: false,
  strokeWidth: 5,
  trackColor: 'indigo.light',
};
