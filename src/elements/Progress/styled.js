import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const size = 100;
const strokeWidth = 15;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const circularRotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const circularDash = keyframes`
from {
  stroke-dashoffset: ${circumference};
}
to {
  stroke-dashoffset: ${-1 * circumference};
}
`;

const StyledDiv = styled('div')`
  animation: ${circularRotate} 2s linear infinite;
`;

const StyledSvg = styled('svg')`
  display: block;
  margin: 20px auto;
  max-width: 100%;

`;

const StyledCircleBg = styled('circle')`
  fill: none;
`;

const StyledCircleFg = styled('circle')`
  fill: none;
  animation: ${circularDash} 4s ease-in-out infinite;
`;

export const CircularProgress = props => {
  const {
    circleOneStroke,
    circleTwoStroke,
  } = props;
  const center = size / 2;
  return (
    <StyledDiv>
      <StyledSvg className="svg" height={size} width={size}>
        <StyledCircleBg
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          stroke={circleOneStroke}
          strokeWidth={strokeWidth}
        />
        <StyledCircleFg
          cx={center}
          cy={center}
          r={radius}
          stroke={circleTwoStroke}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
        />
      </StyledSvg>
    </StyledDiv>
  );
};

CircularProgress.propTypes = {
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};
