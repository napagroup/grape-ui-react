import PropTypes from 'prop-types';
import moment from 'moment';

export const timeFieldPropTypes = {
  /** Default value. Expects either a formatted time string or moment object. */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment),
  ]),
  /** Provide a function to define disabled for select hour options. */
  disabledHours: PropTypes.func,
  /** Provide a function to define disabled for select minute options. */
  disabledMinutes: PropTypes.func,
  /** Provide a function to define disabled for select second options. */
  disabledSeconds: PropTypes.func,
  /** Moment string. */
  format: PropTypes.string,
  /** Define interval of hours available in select options. */
  hourStep: PropTypes.number,
  /** Set input to read-only. */
  inputReadOnly: PropTypes.bool,
  /** Define interval of minutes available in select options. */
  minuteStep: PropTypes.number,
  /** Called when a different value is selected or changed. */
  onChange: PropTypes.func,
  /** Define interval of seconds available in select options. */
  secondStep: PropTypes.number,
  /** Toggle whether to display hour. */
  showHour: PropTypes.bool,
  /** Toggle whether to display minutes. */
  showMin: PropTypes.bool,
  /** Toggle whether to display seconds. */
  showSecond: PropTypes.bool,
  /** Toggle whether to display 12 hours format. */
  use12Hours: PropTypes.bool,
  /** The current value of the input field. */
  value: PropTypes.object,
};

export const timeFieldDefaultProps = {
  defaultValue: null,
  disabledHours: () => {},
  disabledMinutes: () => {},
  disabledSeconds: () => {},
  format: '',
  hourStep: 1,
  inputReadOnly: false,
  minuteStep: 1,
  onChange: () => {},
  secondStep: 1,
  showHour: true,
  showMin: true,
  showSecond: true,
  use12Hours: false,
};
