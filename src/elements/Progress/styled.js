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
  progressType: PropTypes.string,
};

Progress.defaultProps = {
  progressType: 'linear',
};
