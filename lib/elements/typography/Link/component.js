"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LinkComponent = exports.LinkComponent = function LinkComponent(_ref) {
  var children = _ref.children,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["children", "to"]);

  var trimmedProps = (0, _componentHelpers.removeSomeProps)(props, Object.keys(_objectSpread({}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes)));

  if (to) {
    var linkProps = _objectSpread({
      to: to
    }, trimmedProps);

    return _react2["default"].createElement(_reactRouterDom.Link, linkProps, children);
  }

  return _react2["default"].createElement("a", trimmedProps, children);
};

LinkComponent.propTypes = {
  children: _propTypes2["default"].any.isRequired,
  to: _propTypes2["default"].string
};
LinkComponent.defaultProps = {
  to: ''
};