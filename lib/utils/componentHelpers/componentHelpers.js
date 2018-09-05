'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSomeProps = exports.addPassthroughMethod = exports.passThrough = exports.resolveColor = undefined;

var _globalStyles = require('../../global-styles');

var _objectHelpers = require('../../utils/objectHelpers');

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

var defaultValue = 'inherit';

var resolveColor = function resolveColor(color) {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  var resolvedValue = (0, _objectHelpers.isKeyNestedProp)(color) ? (0, _objectHelpers.resolveToProperty)(color, colorSchema) : (0, _objectHelpers.resolveToProperty)(color + '.base', colorSchema);
  return resolvedValue || defaultValue;
};

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

exports.resolveColor = resolveColor;
exports.passThrough = passThrough;
exports.addPassthroughMethod = addPassthroughMethod;
exports.removeSomeProps = removeSomeProps;