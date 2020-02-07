"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = (0, _styledComponents2["default"])(_component.FlexComponent)(_templateObject(), _styledSystem.flexbox, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
Flex.defaultProps = {
  display: 'flex'
};
/** @component */

exports.Flex = Flex;