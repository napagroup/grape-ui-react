import { css, keyframes } from 'styled-components';

const determinateKeyframesBase = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const determinateKeyframes = () => css`
  ${determinateKeyframesBase}
`;

const indeterminateKeyframesBase = keyframes`
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

export const indeterminateKeyframes = () => css`
  ${indeterminateKeyframesBase}
`;
