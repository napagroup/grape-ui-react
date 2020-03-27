"use strict";

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSomeProps = exports.passThrough = void 0;

var _except = _interopRequireDefault(require("except"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var removeSomeProps = function removeSomeProps(originalProps, toBeRemovedProps) {
  return (0, _except["default"])(originalProps, toBeRemovedProps);
};

exports.removeSomeProps = removeSomeProps;

var passThrough = function passThrough(component, props) {
  var omit = Object.keys(component.propTypes || {});
  return (0, _except["default"])(props, omit);
};

exports.passThrough = passThrough;