"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  margin: 0 0 ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var fontSizeParagraph = function fontSizeParagraph(props) {
  var lead = props.lead;
  return lead ? (0, _styledHelpers.fontSizeCore)(_objectSpread({}, props, {
    lg: true
  })) : (0, _styledHelpers.fontSizeCore)(props);
};

var fontWeightParagraph = function fontWeightParagraph(props) {
  var lead = props.lead;
  return lead ? (0, _styledSystem.fontWeight)(_objectSpread({}, props, {
    fontWeight: '300'
  })) : (0, _styledSystem.fontWeight)(props);
};

var Paragraph = (0, _styledComponents2["default"])(_component.ParagraphComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, fontSizeParagraph, fontWeightParagraph, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, gridSchema.gutter);
Paragraph.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  lead: _propTypes2["default"].bool
});
Paragraph.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  lead: false
});
exports.Paragraph = Paragraph;