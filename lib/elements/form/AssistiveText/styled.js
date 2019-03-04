'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssistiveText = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  padding: 0 ', ';\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  padding: 0 ', ';\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _globalStyles = require('../../../global-styles');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var padding = gridSchema.gutter;
var fontSizeAssistiveText = function fontSizeAssistiveText(props) {
  return (0, _styledHelpers.fontSizeCore)(Object.assign({}, props, { sm: true }));
};
var AssistiveText = exports.AssistiveText = (0, _styledComponents2.default)(_component.AssistiveTextComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, fontSizeAssistiveText, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, padding);
AssistiveText.propTypes = Object.assign({}, _styledHelpers.typography.propTypes);

AssistiveText.defaultProps = Object.assign({}, _styledHelpers.defaultStylesBase, {
  color: 'gray'
});