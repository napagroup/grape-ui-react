import { css } from 'styled-components';
import { system } from 'styled-system';
import { resolveColor } from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';

export const getAnimationIterationCount = props => {
  const {
    animationIterationCount,
    loop,
  } = props;
  if (animationIterationCount) {
    return animationIterationCount;
  }
  if (loop) {
    return 'infinite';
  }
  return 1;
};

export const makeColorResolver = (styleName, propName) => props => ({
  [styleName]: resolveColor(props[propName], getGlobalOverrides(props)),
});

export const styledSystemAnimation = css`
  ${system({ animationDuration: true })}
  ${system({ animationTimingFunction: true })}
  ${system({ animationDelay: true })}
  ${system({ animationIterationCount: true })}
  ${system({ animationDirection: true })}
  ${system({ animationFillMode: true })}
  ${system({ animationPlayState: true })}
  ${system({ animation: true })}
`;
