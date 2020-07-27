"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.timeFieldDefaultProps = exports.timeFieldPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

const timeFieldPropTypes = {
  /** Default value. Expects either a formatted time string or moment object. */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(_moment.default)]),

  /** Provide a function to define disabled for select hour options. */
  disabledHours: _propTypes.default.func,

  /** Provide a function to define disabled for select minute options. */
  disabledMinutes: _propTypes.default.func,

  /** Provide a function to define disabled for select second options. */
  disabledSeconds: _propTypes.default.func,

  /** Moment string. */
  format: _propTypes.default.string,

  /** Define interval of hours available in select options. */
  hourStep: _propTypes.default.number,

  /** Set input to read-only. */
  inputReadOnly: _propTypes.default.bool,

  /** Define interval of minutes available in select options. */
  minuteStep: _propTypes.default.number,

  /** Called when a different value is selected or changed. */
  onChange: _propTypes.default.func,

  /** Define interval of seconds available in select options. */
  secondStep: _propTypes.default.number,

  /** Toggle whether to display hour. */
  showHour: _propTypes.default.bool,

  /** Toggle whether to display minutes. */
  showMin: _propTypes.default.bool,

  /** Toggle whether to display seconds. */
  showSecond: _propTypes.default.bool,

  /** Toggle whether to display 12 hours format. */
  use12Hours: _propTypes.default.bool,

  /** The current value of the input field. */
  value: _propTypes.default.object
};
exports.timeFieldPropTypes = timeFieldPropTypes;
const timeFieldDefaultProps = {
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
  use12Hours: false
};
exports.timeFieldDefaultProps = timeFieldDefaultProps;