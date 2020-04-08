"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styledWrapperPropsToTrim = exports.propsToTrim = exports.defaultDayPickerProps = exports.defaultControlColorProps = void 0;

var _styledHelpers = require("../../../utils/styledHelpers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var styledWrapperPropsToTrim = [].concat(_toConsumableArray(Object.keys(propsToTrim)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['disabled', 'format', 'value']);
exports.styledWrapperPropsToTrim = styledWrapperPropsToTrim;