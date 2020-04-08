"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hideable = require("./Hideable");

Object.keys(_Hideable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Hideable[key];
    }
  });
});