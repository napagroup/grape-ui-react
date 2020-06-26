import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Hideable } from 'src/elements/utils';
import { makeColorResolver } from '../utils';

const backgroundIndicatorColor = makeColorResolver('background', 'indicatorColor');
const backgroundTrackColor = makeColorResolver('background', 'trackColor');

const determinate1 = keyframes`
  0% {
    left: -100%;
    right: 100%;
  }
  50% {
    left: -50%;
    right: 100%;
  }
  95% {
    left: -5%;
    right: 100%;
  }
`;

const indeterminate1 = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const StyledRoot = styled('div')`
  position: relative;
  overflow: hidden;
  height: 4;
  @media print: {
    colorAdjust: exact;
  };
`;

const StyledDiv = styled('div')`
  height: 5px;
  position: relative;
  ${backgroundTrackColor}
  padding: 1px;
  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`;

const StyledLineDet = styled('span')`
  width: 100%;
  position: absolute;
  ${backgroundIndicatorColor}
  left: 0;
  bottom: 0;
  top: 0;
  animation: ${determinate1} ${props => props.duration}s cubic-bezier(0.165, 0.84, 0.44, 0.001) ${props => (props.loop ? 'infinite' : '')};
`;

const StyledLineIndet = styled('span')`
  width: 100%;
  position: absolute;
  ${backgroundIndicatorColor}
  left: 0;
  bottom: 0;
  top: 0;
  transition: transform 0.2s linear;
  transformOrigin: left;
  animation: ${indeterminate1} 1.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
`;

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
    <StyledRoot>
      <StyledDiv trackColor={getTrackColor({ hideTrack, trackColor })}>
        <Hideable isHidden={!isDeterminate}>
          <StyledLineDet
            duration={duration}
            indicatorColor={indicatorColor}
            loop={loop}
          />
        </Hideable>
        <Hideable isHidden={isDeterminate}>
          <StyledLineIndet
            indicatorColor={indicatorColor}
            loop={loop}
          />
        </Hideable>
      </StyledDiv>
    </StyledRoot>
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
  duration: 25,
  hideTrack: false,
  indicatorColor: 'indigo.dark',
  isDeterminate: false,
  loop: true,
  trackColor: 'indigo.light',
};
