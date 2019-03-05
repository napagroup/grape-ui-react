'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require('../../utils/styledHelpers');

var _componentHelpers = require('../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrimForButton = Object.assign({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.border.propTypes, _styledSystem.borderWidth.propTypes, _styledSystem.bottom.propTypes, _styledSystem.color.propTypes, {
  contained: false
}, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.height.propTypes, {
  href: _propTypes2.default.string
}, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.letterSpacing.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, {
  outline: false
}, _styledSystem.position.propTypes, {
  raised: false
}, _styledSystem.ratio.propTypes, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, {
  target: _propTypes2.default.string,
  to: _propTypes2.default.string
}, _styledSystem.top.propTypes, _styledHelpers.typography.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);

var propsToTrimForLink = Object.assign({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.border.propTypes, _styledSystem.borderWidth.propTypes, _styledSystem.bottom.propTypes, _styledSystem.color.propTypes, {
  contained: false
}, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.height.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.letterSpacing.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, {
  outline: false
}, _styledSystem.position.propTypes, {
  raised: false
}, _styledSystem.ratio.propTypes, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.top.propTypes, _styledHelpers.typography.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);
var ButtonComponent = function ButtonComponent(_ref) {
  var children = _ref.children,
      href = _ref.href,
      target = _ref.target,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['children', 'href', 'target', 'to']);

  var output = null;
  if (href) {
    output = _react2.default.createElement(
      'a',
      _extends({}, (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrimForLink)), { href: href, target: target }),
      children
    );
  } else if (to) {
    var linkProps = {
      target: target,
      to: to
    };
    output = _react2.default.createElement(
      _reactRouterDom.Link,
      _extends({}, (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrimForLink)), linkProps),
      children
    );
  } else {
    output = _react2.default.createElement(
      'button',
      _extends({ type: 'button' }, (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrimForButton))),
      children
    );
  }
  return output;
};
exports.ButtonComponent = ButtonComponent;
ButtonComponent.propTypes = {
  children: _propTypes2.default.any,
  href: _propTypes2.default.string,
  target: _propTypes2.default.string,
  to: _propTypes2.default.string
};
ButtonComponent.defaultProps = {
  children: null,
  href: null,
  target: '_self',
  to: null
};