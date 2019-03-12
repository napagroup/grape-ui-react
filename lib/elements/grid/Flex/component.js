'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledHelpers = require('../../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledHelpers.flexboxProps.propTypes, _styledHelpers.layoutProps.propTypes, _styledHelpers.positionProps.propTypes, _styledHelpers.spaceProps.propTypes);

var FlexComponent = function FlexComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)),
    children
  );
};

exports.FlexComponent = FlexComponent;
FlexComponent.propTypes = {
  children: _propTypes2.default.any
};

FlexComponent.defaultProps = {
  children: null
};