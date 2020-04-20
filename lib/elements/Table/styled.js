"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Table = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

var _utils = require("./utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Table = (0, _styledComponents["default"])(_component.TableComponent)(_templateObject(), _utils.defaultTableStylesBase, _styledSystem.flexbox);
/** @component */

exports.Table = Table;