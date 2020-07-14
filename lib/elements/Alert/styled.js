"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Alert = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Hideable = require("../../elements/utils/Hideable");

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const Alert = (0, _styledComponents.default)((0, _Hideable.withHideable)(_component.AlertComponent))(_templateObject());
exports.Alert = Alert;
Alert.defaultProps = {
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 4,
  color: 'white',
  display: 'inline-block',
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  p: 3
};
/** @component */