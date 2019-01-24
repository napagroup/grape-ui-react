'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  margin: 0 0 ', ';\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  margin: 0 0 ', ';\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../global-styles');

var _textStyles = require('./textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var getParagraphFontSize = function getParagraphFontSize(props) {
  var lead = props.lead;

  return lead ? (0, _textStyles.getFontSize)(Object.assign({}, props, { lg: true })) : (0, _textStyles.getFontSize)(props);
};
var getParagraphFontWeight = function getParagraphFontWeight(props) {
  var lead = props.lead;

  return lead ? (0, _textStyles.getFontWeight)(Object.assign({}, props, { fontWeight: '300' })) : (0, _textStyles.getFontWeight)(props);
};
var Paragraph = _styledComponents2.default.p(_templateObject, _textStyles.getFontFamily, getParagraphFontSize, getParagraphFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, gridSchema.gutter);

Paragraph.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lead: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

exports.Paragraph = Paragraph;