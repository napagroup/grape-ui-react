"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.sortAsNumber = exports.sortAsString = exports.sortComparison = exports.makeSanitizeNumber = exports.makeSanitizeString = void 0;

const makeSanitizeString = (isCaseSensitive = false) => a => isCaseSensitive ? String(a) : String(a).toLowerCase();

exports.makeSanitizeString = makeSanitizeString;

const makeSanitizeNumber = () => a => Number(a);

exports.makeSanitizeNumber = makeSanitizeNumber;

const sanitizeItem = (sanitizer, a, propName) => sanitizer(propName ? a[propName] : a);

const sortComparison = (sanitizer, isDescending = false, propName = '') => (a, b) => {
  const aValue = sanitizeItem(sanitizer, a, propName);
  const bValue = sanitizeItem(sanitizer, b, propName);
  let result = 0;

  if (aValue > bValue) {
    result = 1;
  }

  if (aValue < bValue) {
    result = -1;
  }

  return isDescending ? result * -1 : result;
};

exports.sortComparison = sortComparison;

const sortAsString = (isDescending = false, propName = '', isCaseSensitive = false) => sortComparison(makeSanitizeString(isCaseSensitive), isDescending, propName);

exports.sortAsString = sortAsString;

const sortAsNumber = (isDescending = false, propName = '') => sortComparison(makeSanitizeNumber(), isDescending, propName);

exports.sortAsNumber = sortAsNumber;