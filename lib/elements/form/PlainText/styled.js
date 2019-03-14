"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainText = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var PlainText = exports.PlainText = (0, _styledComponents2.default)(_component.PlainTextComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
PlainText.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledHelpers.typography.propTypes);
PlainText.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding
});