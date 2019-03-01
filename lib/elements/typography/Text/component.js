'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require('../../../utils/styledHelpers');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledHelpers.typography.propTypes);
var TextComponent = function TextComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'span',
    (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)),
    children
  );
};
exports.TextComponent = TextComponent;
TextComponent.propTypes = {
  children: _propTypes2.default.any.isRequired
};