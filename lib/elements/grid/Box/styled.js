"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Box = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Box = (0, _styledComponents["default"])(_component.BoxComponent)(_templateObject(), (0, _styledSystem.system)({
  boxSizing: true
}), _styledSystem.border, _styledSystem.flexbox, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
exports.Box = Box;
Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string])
};
Box.defaultProps = {
  boxSizing: 'border-box'
};
/** @component */