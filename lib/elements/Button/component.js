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

var _componentHelpers = require('../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _reactRouterDom = require('react-router-dom');

var _styledHelpers = require('../../utils/styledHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledHelpers.flexboxProps.propTypes, _styledHelpers.layoutProps.propTypes, _styledHelpers.positionProps.propTypes, _styledHelpers.spaceProps.propTypes, _styledHelpers.typography.propTypes, {
  variant: _propTypes2.default.string
});
var propsToTrimForButton = Object.assign({}, propsToTrim, _styledSystem.boxShadow.propTypes, {
  contained: false,
  href: _propTypes2.default.string,
  outline: false,
  raised: false,
  target: _propTypes2.default.string,
  to: _propTypes2.default.string
});

var propsToTrimForLink = Object.assign({}, propsToTrim, _styledSystem.boxShadow.propTypes, {
  contained: false,
  outline: false,
  raised: false
});
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