"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.styledWrapperPropsToTrim = exports.propsToTrim = exports.defaultDayPickerProps = exports.defaultControlColorProps = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _styledHelpers = require("../../../utils/styledHelpers");

const defaultControlColorProps = {
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
const defaultDayPickerProps = {
  numberOfMonths: 1,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
exports.defaultDayPickerProps = defaultDayPickerProps;
const propsToTrim = ['assistiveText', 'color', 'controlId', 'isHidden', 'isRequired', 'plainText'];
exports.propsToTrim = propsToTrim;
const styledWrapperPropsToTrim = [...(0, _keys.default)(propsToTrim), ...(0, _keys.default)(_styledHelpers.typography.propTypes), 'disabled', 'format', 'value'];
exports.styledWrapperPropsToTrim = styledWrapperPropsToTrim;