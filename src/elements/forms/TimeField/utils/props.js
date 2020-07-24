import PropTypes from 'prop-types';

export const timeFieldPropTypes = {
  /** Default value. Expects either a formatted time string or moment object. */
  defaultValue: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** Provide a function to define disabled for select hour options. */
  disabledHours: PropTypes.bool,
  /** Provide a function to define disabled for select minute options. */
  disabledMinutes: PropTypes.bool,
  /** Provide a function to define disabled for select second options. */
  disabledSeconds: PropTypes.bool,
  /** Moment string. */
  format: PropTypes.string,
  /** Define interval of hours available in select options. */
  hourStep: PropTypes.bool,
  /** Define interval of minutes available in select options. */
  minuteStep: PropTypes.bool,
  /** Called when a different value is selected or changed. */
  onChange: PropTypes.func,
  /** Define interval of seconds available in select options. */
  secondStep: PropTypes.bool,
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
  disabledHours: false,
  disabledMinutes: false,
  disabledSeconds: false,
  format: '',
  hourStep: false,
  minuteStep: false,
  onChange: () => {},
  secondStep: false,
  showHour: true,
  showMin: true,
  showSecond: true,
  use12Hours: false,
  value: null,
};
