'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssistiveText = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  padding: 0 ', ';\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  padding: 0 ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _globalStyles = require('../../../global-styles');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var padding = gridSchema.gutter;
var fontSizeForAssistiveText = function fontSizeForAssistiveText(props) {
  return (0, _textStyles.getFontSize)(Object.assign({}, props, { sm: true })) + ';';
};
var AssistiveText = exports.AssistiveText = (0, _styledComponents2.default)(_component.AssistiveTextComponent)(_templateObject, _textStyles.getColor, _textStyles.getFontFamily, fontSizeForAssistiveText, _textStyles.getFontStyle, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getTextAlign, _textStyles.getTextDecoration, padding);
AssistiveText.propTypes = {};

AssistiveText.defaultProps = {
  color: 'gray'
};