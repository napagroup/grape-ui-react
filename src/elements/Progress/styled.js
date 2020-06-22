import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { resolveColor } from 'src/utils/styledHelpers';
import { Hideable } from 'src/elements/utils';

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

const StyledDiv = styled('div')`
  animation: ${circularRotate} 2.4s linear infinite;
`;

const StyledSvg = styled('svg')`
  display: block;
  margin: 20px auto;
  max-width: 100%;

`;

const StyledCircleBg = styled('circle')`
  fill: none;
  stroke: ${props => resolveColor(props.strokeColor)};
`;

const StyledCircleFg = styled('circle')`
  animation: ${circularDash} 2.4s ease-in-out infinite;
  fill: none;
  stroke: ${props => resolveColor(props.strokeColor)};
`;

const StyledDivDet = styled('div')`
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

const StyledDeterminateCircleFg = styled('circle')`
  animation: ${determinateCircularDash} 4.2s ease-in-out infinite;
  fill: none;
  stroke: ${props => resolveColor(props.strokeColor)};
`;

const CircularProgress = props => {
  const {
    circleBgStroke,
    circleFgStroke,
    hideTrack,
    isDeterminate,
    size,
    strokeWidth,
  } = props;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  return (
    <>
      <Hideable hide={!isDeterminate}>
        <StyledDivDet>
          <StyledSvg className="svg" height={size} width={size}>
            <Hideable hide={hideTrack}>
              <StyledCircleBg
                circumference={circumference}
                cx={center}
                cy={center}
                r={radius}
                strokeColor={circleBgStroke}
                strokeWidth={strokeWidth}
              />
            </Hideable>
            <StyledDeterminateCircleFg
              circumference={circumference}
              cx={center}
              cy={center}
              r={radius}
              strokeColor={circleFgStroke}
              strokeDasharray={circumference}
              strokeWidth={strokeWidth}
            />
          </StyledSvg>
        </StyledDivDet>
      </Hideable>
      <Hideable hide={isDeterminate}>
        <StyledDiv>
          <StyledSvg className="svg" height={size} width={size}>
            <Hideable hide={hideTrack}>
              <StyledCircleBg
                circumference={circumference}
                cx={center}
                cy={center}
                r={radius}
                strokeColor={circleBgStroke}
                strokeWidth={strokeWidth}
              />
            </Hideable>
            <StyledCircleFg
              circumference={circumference}
              cx={center}
              cy={center}
              r={radius}
              strokeColor={circleFgStroke}
              strokeDasharray={circumference}
              strokeWidth={strokeWidth}
            />
          </StyledSvg>
        </StyledDiv>
      </Hideable>
    </>
  );
};

CircularProgress.propTypes = {
  circleBgStroke: PropTypes.string,
  circleFgStroke: PropTypes.string,
  hideTrack: PropTypes.bool,
  isDeterminate: PropTypes.bool,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

CircularProgress.defaultProps = {
  circleBgStroke: 'indigo.light',
  circleFgStroke: 'indigo.dark',
  hideTrack: false,
  isDeterminate: false,
  size: 35,
  strokeWidth: 5,
};

const showCircular = props => props.progressType === 'circular';

export const Progress = props => (
  <>
    <Hideable hide={!showCircular(props)}>
      <CircularProgress {...props} />
    </Hideable>
  </>
);


Progress.propTypes = {
  progressType: PropTypes.string,
};

Progress.defaultProps = {
  progressType: 'circular',
};
