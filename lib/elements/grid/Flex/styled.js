"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Flex = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Hideable = require("../../../elements/utils/Hideable");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const Flex = (0, _styledComponents.default)((0, _Hideable.withHideable)(_component.FlexComponent))(_templateObject(), _styledSystem.background, _styledSystem.border, _styledSystem.flexbox, _styledSystem.grid, _styledSystem.layout, _styledSystem.position, _styledSystem.shadow, _styledSystem.space);
exports.Flex = Flex;
Flex.propTypes = {
  /** Hides component */
  isHidden: _propTypes.default.bool
};
Flex.defaultProps = {
  display: 'flex',
  isHidden: false
};
/** @component */