'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grapeThemeProvider = require('./grapeThemeProvider');

Object.keys(_grapeThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _grapeThemeProvider[key];
    }
  });
});