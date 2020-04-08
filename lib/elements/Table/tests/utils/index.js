"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _columns = require("./columns");

Object.keys(_columns).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _columns[key];
    }
  });
});

var _testData = require("./testData");

Object.keys(_testData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testData[key];
    }
  });
});