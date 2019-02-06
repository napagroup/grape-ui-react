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

var _textStyles = require('../textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LinkComponent = function LinkComponent(_ref) {
  var children = _ref.children,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['children', 'to']);

  if (to) {
    var linkProps = Object.assign({}, (0, _componentHelpers.passThrough)(LinkComponent, props), {
      to: to
    });
    return _react2.default.createElement(
      _reactRouterDom.Link,
      linkProps,
      children
    );
  }
  return _react2.default.createElement(
    'a',
    (0, _componentHelpers.passThrough)(LinkComponent, props),
    children
  );
};

exports.LinkComponent = LinkComponent;
LinkComponent.propTypes = Object.assign({
  children: _propTypes2.default.any.isRequired,
  hoverColor: _propTypes2.default.string
}, _textStyles.typography.propTypes, {
  to: _propTypes2.default.string
});

LinkComponent.defaultProps = {
  hoverColor: '',
  to: ''
};