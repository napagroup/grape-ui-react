"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = (0, _styledComponents2["default"])(_component.BoxComponent)(_templateObject(), (0, _styledSystem.system)({
  boxSizing: true
}), _styledSystem.flexbox, _styledSystem.layout, _styledSystem.position, _styledSystem.space);
Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].string])
};
Box.defaultProps = {
  boxSizing: 'border-box'
};
/** @component */

exports.Box = Box;