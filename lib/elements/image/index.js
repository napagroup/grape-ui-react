'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image = require('./Image');

Object.keys(_Image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Image[key];
    }
  });
});