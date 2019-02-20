'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainText = undefined;

var _templateObject = _taggedTemplateLiteral(['\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n'], ['\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n', '\n']);

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _baseControlStyle = require('../../../elements/form/ControlGroup/baseControlStyle');

var _textStyles = require('../../../elements/typography/textStyles');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var controlStylesBaseForPlainText = function controlStylesBaseForPlainText(props) {
  return !props.validationError ? (0, _baseControlStyle.controlStylesBase)(props) : (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));
};

var PlainText = exports.PlainText = (0, _styledComponents2.default)(_component.PlainTextComponent)(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, controlStylesBaseForPlainText);
PlainText.propTypes = Object.assign({}, _textStyles.typography.propTypes, _baseControlStyle.control.propTypes);

PlainText.defaultProps = Object.assign({}, _textStyles.defaultTextStylesBase, _baseControlStyle.defaultControlStylesBase);