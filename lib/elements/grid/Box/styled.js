"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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