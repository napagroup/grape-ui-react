"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainText = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  > div {\n    ", "\n  }\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var PlainTextStyledComponent = (0, _styledComponents2["default"])(_component.PlainTextComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledHelpers.ellipsisCore);
PlainTextStyledComponent.propTypes = _objectSpread({}, _styledHelpers.layoutProps.propTypes, {}, _styledSystem.space.propTypes, {}, _styledHelpers.typography.propTypes);
PlainTextStyledComponent.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  width: 1
});

var PlainText = exports.PlainText = function PlainText(props) {
  var formStyle = props.formStyle,
      pb = props.pb,
      pt = props.pt,
      otherProps = _objectWithoutProperties(props, ["formStyle", "pb", "pt"]);

  var paddingBottom = formStyle === 'filled' ? '0.5rem' : pb;
  var paddingTop = formStyle === 'filled' ? 'calc(0.7rem + 1px)' : pt;
  return _react2["default"].createElement(PlainTextStyledComponent, _extends({
    pb: paddingBottom,
    pt: paddingTop
  }, otherProps));
};

PlainText.propTypes = _objectSpread({}, _styledSystem.space.propTypes);
PlainText.defaultProps = {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding
};