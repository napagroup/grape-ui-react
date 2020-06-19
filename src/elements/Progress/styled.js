import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const StyledCircleText = styled('text')`
  font-size: 2rem;
  text-anchor: middle;
  fill: #fff;
  font-weight: bold;
`;
export const CircularProgress = props => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
  }, [setOffset, circumference, progress, offset]);
  return (
    <>
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
          ref={circleRef}
          className="svg-circle"
          cx={center}
          cy={center}
          r={radius}
          stroke={circleTwoStroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
        <StyledCircleText
          className="svg-circle-text"
          x={center}
          y={center}
        >
          {progress}
          {'%'}
        </StyledCircleText>
      </StyledSvg>
    </>
  );
};

CircularProgress.propTypes = {
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};
