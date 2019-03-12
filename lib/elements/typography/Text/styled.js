'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = exports.Text = (0, _styledComponents2.default)(_component.TextComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);

Text.propTypes = Object.assign({}, _styledHelpers.typography.propTypes);

Text.defaultProps = Object.assign({}, _styledHelpers.defaultStylesBase);