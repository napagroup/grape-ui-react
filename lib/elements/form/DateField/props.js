"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styledWrapperPropsToTrim = exports.propsToTrim = exports.defaultDayPickerProps = exports.defaultControlColorProps = undefined;

var _styledHelpers = require("../../../utils/styledHelpers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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