'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactRouterDom = require('react-router-dom');

var _styledHelpers = require('../../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({
  hoverColor: ''
}, _styledHelpers.typography.propTypes);
var LinkComponent = function LinkComponent(_ref) {
  var children = _ref.children,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['children', 'to']);

  var trimmedProps = (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim));
  if (to) {
    var linkProps = Object.assign({
      to: to
    }, trimmedProps);
    return _react2.default.createElement(
      _reactRouterDom.Link,
      linkProps,
      children
    );
  }
  return _react2.default.createElement(
    'a',
    trimmedProps,
    children
  );
};

exports.LinkComponent = LinkComponent;
LinkComponent.propTypes = {
  children: _propTypes2.default.any.isRequired,
  to: _propTypes2.default.string
};

LinkComponent.defaultProps = {
  to: ''
};