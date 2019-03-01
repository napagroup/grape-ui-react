'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolveColor = require('./resolveColor');

Object.keys(_resolveColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolveColor[key];
    }
  });
});

var _scaleFont = require('./scaleFont');

Object.keys(_scaleFont).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scaleFont[key];
    }
  });
});

var _typography = require('./typography');

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});