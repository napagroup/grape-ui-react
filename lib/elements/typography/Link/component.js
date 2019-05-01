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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LinkComponent = exports.LinkComponent = function LinkComponent(_ref) {
  var children = _ref.children,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["children", "to"]);

  var trimmedProps = (0, _componentHelpers.removeSomeProps)(props, Object.keys(_styledHelpers.typography.propTypes));

  if (to) {
    var linkProps = _objectSpread({
      to: to
    }, trimmedProps);

    return _react2.default.createElement(_reactRouterDom.Link, linkProps, children);
  }

  return _react2.default.createElement("a", trimmedProps, children);
};

LinkComponent.propTypes = {
  children: _propTypes2.default.any.isRequired,
  to: _propTypes2.default.string
};
LinkComponent.defaultProps = {
  to: ''
};