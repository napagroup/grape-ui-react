'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textStyles = require('../textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListItemComponent = function ListItemComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'li',
    (0, _componentHelpers.passThrough)(ListItemComponent, props),
    children
  );
};
exports.ListItemComponent = ListItemComponent;
ListItemComponent.propTypes = Object.assign({
  children: _propTypes2.default.any.isRequired
}, _textStyles.typography.propTypes);