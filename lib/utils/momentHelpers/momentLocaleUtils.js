"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
exports.formatDate = formatDate;
exports.parseDate = parseDate;
exports.default = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _moment = _interopRequireDefault(require("moment"));

/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */
function formatDay(day, locale = 'en') {
  return (0, _moment.default)(day).locale(locale).format('ddd ll');
}

function formatMonthTitle(date, locale = 'en') {
  return (0, _moment.default)(date).locale(locale).format('MMMM YYYY');
}

function formatWeekdayShort(day, locale = 'en') {
  return _moment.default.localeData(locale).weekdaysMin()[day];
}

function formatWeekdayLong(day, locale = 'en') {
  return _moment.default.localeData(locale).weekdays()[day];
}

function getFirstDayOfWeek(locale = 'en') {
  return _moment.default.localeData(locale).firstDayOfWeek();
}

function getMonths(locale = 'en') {
  return _moment.default.localeData(locale).months();
}

function formatDate(date, format = 'L', locale = 'en') {
  return (0, _moment.default)(date).locale(locale).format((0, _isArray.default)(format) ? format[0] : format);
}

function parseDate(str, format = 'L', locale = 'en') {
  const m = (0, _moment.default)(str, format, locale, true);

  if (m.isValid()) {
    return m.toDate();
  }

  return undefined;
}

var _default = {
  formatDate,
  formatDay,
  formatMonthTitle,
  formatWeekdayLong,
  formatWeekdayShort,
  getFirstDayOfWeek,
  getMonths,
  parseDate
};
exports.default = _default;