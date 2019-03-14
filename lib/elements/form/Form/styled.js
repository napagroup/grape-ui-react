"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = exports.Form = (0, _styledComponents2.default)(_component.FormComponent)(_templateObject(), _styledSystem.alignContent, _styledSystem.alignItems, _styledSystem.alignSelf, _styledSystem.bottom, _styledSystem.display, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledSystem.height, _styledSystem.justifyContent, _styledSystem.left, _styledSystem.maxHeight, _styledSystem.maxWidth, _styledSystem.minHeight, _styledSystem.minWidth, _styledSystem.position, _styledSystem.right, _styledSystem.size, _styledSystem.top, _styledSystem.space, _styledSystem.width, _styledSystem.zIndex);
Form.propTypes = _objectSpread({
  formStyle: _propTypes2.default.string
}, _styledSystem.width.propTypes, _styledSystem.display.propTypes);
Form.defaultProps = {
  formStyle: ''
};