"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.styledWrapperPropsToTrim = exports.propsToTrim = exports.defaultDayPickerProps = exports.defaultControlColorProps = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _context;

var defaultControlColorProps = {
  captionColor: 'inherit',
  dayHoverBgColor: 'brandLinkHover',
  dayHoverColor: 'white.light',
  disabledColor: 'gray.light',
  menuBgColor: 'white.light',
  outsideColor: 'gray.dark',
  selectedBetweenBgColor: 'brandLink.light',
  selectedBetweenColor: 'black',
  selectedBgColor: 'brandLink',
  selectedColor: 'white.light',
  todayBorderColor: 'black',
  weekdayColor: 'gray.light',
  weekNumberBorderColor: 'gray.light',
  weekNumberColor: 'gray'
};
exports.defaultControlColorProps = defaultControlColorProps;
var defaultDayPickerProps = {
  numberOfMonths: 1,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
exports.defaultDayPickerProps = defaultDayPickerProps;
var propsToTrim = ['assistiveText', 'color', 'controlId', 'isRequired', 'plainText'];
exports.propsToTrim = propsToTrim;
var styledWrapperPropsToTrim = (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])((0, _keys["default"])(propsToTrim)), (0, _toConsumableArray2["default"])((0, _keys["default"])(_styledHelpers.typography.propTypes)), ['disabled', 'format', 'value']);
exports.styledWrapperPropsToTrim = styledWrapperPropsToTrim;