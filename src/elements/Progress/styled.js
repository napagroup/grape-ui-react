import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'src/elements/typography';
import { Hideable } from 'src/elements/utils';
import { CircularProgress } from './CircleProgress';
import { LinearProgress } from './LinearProgress';

const showCircular = props => props.progressType === 'circular';
const showLinear = props => props.progressType === 'linear';

const getCaption = props => {
  const {
    caption,
    captionProps,
  } = props;
  if (React.isValidElement(caption)) {
    return caption;
  }
  if (caption === undefined) {
    return null;
  }
  return (
    <Paragraph
      isHidden={!caption}
      sm
      {...captionProps}
    >
      {caption}
    </Paragraph>
  );
};

getCaption.propTypes = {
  caption: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  captionProps: PropTypes.object,
};

getCaption.defaultProps = {
  caption: '',
  captionProps: {},
};

export const Progress = props => (
  <>
    <Hideable isHidden={!showCircular(props)}>
      <CircularProgress {...props} />
    </Hideable>
    <Hideable isHidden={!showLinear(props)}>
      <LinearProgress {...props} />
    </Hideable>
    {getCaption(props)}
  </>
);

Progress.propTypes = {
  /** Styled system prop for defining animation */
  animation: PropTypes.any,
  /** Styled system prop for defining animation-delay */
  animationDelay: PropTypes.any,
  /** Styled system prop for defining animation-direction */
  animationDirection: PropTypes.any,
  /** Styled system prop for defining animation-duration */
  animationDuration: PropTypes.any,
  /** Styled system prop for defining animation-fill-mode */
  animationFillMode: PropTypes.any,
  /** Styled system prop for defining animation-iteration-count. When blank, it will determine if its value based off the `loop` property. */
  animationIterationCount: PropTypes.any,
  /** Prop for defining custom animation name.  Does NOT follow styled system's responsive breakpoints. */
  animationName: PropTypes.any,
  /** Styled system prop for defining animation-play-state */
  animationPlayState: PropTypes.any,
  /** Styled system prop for defining animation-timing-function */
  animationTimingFunction: PropTypes.any,
  /** Shorthand for setting the track to transparent */
  hideTrack: PropTypes.bool,
  /** Defines the background color for the indicator. */
  indicatorColor: PropTypes.string,
  /** Passes props to the inidicator DOM. */
  indicatorProps: PropTypes.object,
  /** Allow for additional props to be removed from the indicator DOM. Props passed through `indicatorProps` are already trimmed. */
  indicatorPropsToTrim: PropTypes.arrayOf(PropTypes.string),
  /** Will make the progress bar finite. */
  isDeterminate: PropTypes.bool,
  /** Shorthand prop for setting `animationDuration` to 'infinite'. */
  loop: PropTypes.bool,
  /** Defines which progress bar to display */
  progressType: PropTypes.oneOf(['circular', 'linear']),
  /** Defines the total length for the indicator. */
  total: PropTypes.number,
  /** Defines the background color for the track. */
  trackColor: PropTypes.string,
  /** Passes props to the track DOM. */
  trackProps: PropTypes.object,
  /** Allow for additional props to be removed from the track DOM. Props passed through `trackProps` are already trimmed. */
  trackPropsToTrim: PropTypes.arrayOf(PropTypes.string),
  /** Defines the length of the indicator within the track total. When provided 0 or above, will make progess bar determinate. */
  value: PropTypes.number,
};

Progress.defaultProps = {
  animation: '',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '1.5s',
  animationFillMode: 'none',
  animationIterationCount: '',
  animationName: '',
  animationPlayState: 'running',
  animationTimingFunction: 'linear',
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  indicatorProps: {},
  indicatorPropsToTrim: [],
  isDeterminate: false,
  loop: true,
  progressType: 'linear',
  total: 100,
  trackColor: 'gray.light',
  trackProps: {},
  trackPropsToTrim: [],
  value: -1,
};
