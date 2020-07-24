import React from 'react';
import TimePicker from 'rc-time-picker';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

export const TimeComponent = props => (
  <TimePicker
    className="xxx"
    style={{ width: 100 }}
    {...props}
  />
);

TimeComponent.propTypes = {
  ...timeFieldPropTypes,
};

TimeComponent.defaultProps = {
  ...timeFieldDefaultProps,
};
