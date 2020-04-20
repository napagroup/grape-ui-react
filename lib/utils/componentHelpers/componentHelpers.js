"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.removeSomeProps = exports.passThrough = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _except = _interopRequireDefault(require("except"));

var removeSomeProps = function removeSomeProps(originalProps, toBeRemovedProps) {
  return (0, _except["default"])(originalProps, toBeRemovedProps);
};

exports.removeSomeProps = removeSomeProps;

var passThrough = function passThrough(component, props) {
  var omit = (0, _keys["default"])(component.propTypes || {});
  return (0, _except["default"])(props, omit);
};

exports.passThrough = passThrough;