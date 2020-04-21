"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.withHideable = exports.Hideable = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Hideable = function Hideable(props) {
  var hide = props.hide,
      children = props.children;

  if (hide) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

exports.Hideable = Hideable;
Hideable.propTypes = {
  children: _propTypes["default"].any.isRequired,
  hide: _propTypes["default"].bool
};
Hideable.defaultProps = {
  hide: false
};
/**
 * Decorator to compose a Child (target) component within Hideable.
 * @param {object} Child The target or child component to be composed within Hideable. The hide attribute is used to hide the Child.
 * @return {object} Returns the decorated object; The Child component is now composed within a Hideable.
 */

var withHideable = function withHideable(Child) {
  function HideableComponent(props) {
    var hide = props.hide,
        otherProps = (0, _objectWithoutProperties2["default"])(props, ["hide"]);
    return /*#__PURE__*/React.createElement(Hideable, {
      hide: hide
    }, /*#__PURE__*/React.createElement(Child, otherProps));
  }

  HideableComponent.propTypes = {
    hide: _propTypes["default"].bool
  };
  HideableComponent.defaultProps = {
    hide: false
  };
  return HideableComponent;
};

exports.withHideable = withHideable;