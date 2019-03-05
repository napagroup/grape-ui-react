'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSomeProps = exports.addPassthroughMethod = exports.passThrough = undefined;

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeSomeProps = function removeSomeProps(originalProps, toBeRemovedProps) {
  return (0, _except2.default)(originalProps, toBeRemovedProps);
};

var passThrough = function passThrough(component, props) {
  var omit = Object.keys(component.propTypes || {});
  return (0, _except2.default)(props, omit);
};
var addPassthroughMethod = function addPassthroughMethod(component) {
  var refComponent = component;
  refComponent.prototype.passThrough = function () {
    var omit = Object.keys(component.propTypes || {});
    return (0, _except2.default)(undefined.props, omit);
  };
};

exports.passThrough = passThrough;
exports.addPassthroughMethod = addPassthroughMethod;
exports.removeSomeProps = removeSomeProps;