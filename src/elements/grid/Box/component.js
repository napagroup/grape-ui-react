
import React from 'react';
import PropTypes from 'prop-types';
import {
  getProgress,
  getProgressDefaultProps,
  getProgressPropTypes,
} from 'src/elements/Progress';
import { Hideable } from 'src/elements/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultFlexBoxStylesPropsToTrim } from '../utils';

export const BoxComponent = props => {
  const {
    children,
    progressPlacement,
  } = props;
  return (
    <div {...removeSomeProps(props, defaultFlexBoxStylesPropsToTrim)}>
      <Hideable
        isHidden={
          progressPlacement !== 'top'
        }
      >
        {getProgress(props)}
      </Hideable>
      {children}
      <Hideable
        isHidden={
          progressPlacement !== 'bottom'
        }
      >
        {getProgress(props)}
      </Hideable>
    </div>
  );
};

BoxComponent.propTypes = {
  ...getProgressPropTypes,
  children: PropTypes.any,
};

BoxComponent.defaultProps = {
  ...getProgressDefaultProps,
  children: null,
};
