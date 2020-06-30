import React from 'react';
import PropTypes from 'prop-types';
import { Hideable } from 'src/elements/utils';
import { CircularProgress } from './CircleProgress';
import { LinearProgress } from './LinearProgress';

const showCircular = props => props.progressType === 'circular';
const showLinear = props => props.progressType === 'linear';

export const Progress = props => (
  <>
    <Hideable isHidden={!showCircular(props)}>
      <CircularProgress {...props} />
    </Hideable>
    <Hideable isHidden={!showLinear(props)}>
      <LinearProgress {...props} />
    </Hideable>
  </>
);

Progress.propTypes = {
  progressType: PropTypes.string,
};

Progress.defaultProps = {
  progressType: 'linear',
};
