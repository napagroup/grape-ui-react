'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = require('./Form');

Object.keys(_Form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Form[key];
    }
  });
});