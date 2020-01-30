"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styledWrapperPropsToTrim = exports.propsToTrim = exports.defaultDayPickerProps = exports.defaultControlColorProps = undefined;

var _styledHelpers = require("../../../utils/styledHelpers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultControlColorProps = exports.defaultControlColorProps = {
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
var defaultDayPickerProps = exports.defaultDayPickerProps = {
  numberOfMonths: 1,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
var propsToTrim = exports.propsToTrim = ['assistiveText', 'color', 'controlId', 'isRequired', 'plainText'];
var styledWrapperPropsToTrim = exports.styledWrapperPropsToTrim = [].concat(_toConsumableArray(Object.keys(propsToTrim)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['disabled', 'format', 'value']);