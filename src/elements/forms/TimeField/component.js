import React from 'react';
import TimePicker from 'rc-time-picker';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

export const TimeComponent = props => {
  const {
    defaultValue,
    format,
    onChange,
    showSecond,
    use12Hours,
  } = props;
  return (
    <TimePicker
      className="xxx"
      defaultValue={defaultValue}
      format={format}
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      style={{ width: 100 }}
      use12Hours={use12Hours}
    />
  );
};

TimeComponent.propTypes = {
  ...timeFieldPropTypes,
};

TimeComponent.defaultProps = {
  ...timeFieldDefaultProps,
};
