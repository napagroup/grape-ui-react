"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styled = require("./styled");

Object.keys(_styled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styled[key];
    }
  });
});