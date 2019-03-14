"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require("./Box");

Object.keys(_Box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Box[key];
    }
  });
});

var _Flex = require("./Flex");

Object.keys(_Flex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Flex[key];
    }
  });
});