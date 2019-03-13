'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainText = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

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

var PlainText = exports.PlainText = (0, _styledComponents2.default)(_component.PlainTextComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);

PlainText.propTypes = Object.assign({}, _styledSystem.space.propTypes, _styledHelpers.typography.propTypes);

PlainText.defaultProps = Object.assign({}, _styledHelpers.defaultStylesBase, {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding
});