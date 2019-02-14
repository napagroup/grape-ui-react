'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabel = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n  padding: 0 ', ';\n  position: absolute;\n  top: -', ';\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n  padding: 0 ', ';\n  position: absolute;\n  top: -', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../../global-styles');

var _utils = require('../../../elements/typography/utils');

var _componentHelpers = require('../../../utils/componentHelpers');

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _textStyles = require('../../../elements/typography/textStyles');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var padding = (0, _utils.getScaledSize)(gridSchema.gutter, 0.5);
var bgColor = function bgColor(props) {
  return 'background-color: ' + (0, _componentHelpers.resolveColor)(props.bgColor) + ';';
};
var colorForLabel = function colorForLabel(props) {
  return (0, _textStyles.getColor)(Object.assign({}, props, {
    color: !props.validationError ? props.color : 'brandDanger'
  })) + ';';
};
var fontSizeForLabel = function fontSizeForLabel(props) {
  return (0, _textStyles.getFontSize)(Object.assign({}, props, { sm: true })) + ';';
};
var ControlLabel = exports.ControlLabel = (0, _styledComponents2.default)(_component.ControlLabelComponent)(_templateObject, bgColor, colorForLabel, _textStyles.getFontFamily, fontSizeForLabel, _textStyles.getFontStyle, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getTextAlign, _textStyles.getTextDecoration, padding, padding, padding);

ControlLabel.propTypes = Object.assign({
  bgColor: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
}, _textStyles.typography.propTypes, {
  validationError: _propTypes2.default.string
});

ControlLabel.defaultProps = {
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: ''
};