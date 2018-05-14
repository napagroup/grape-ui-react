'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  margin-bottom: calc(', ' / 4);\n'], ['\n  ', '\n  margin-bottom: calc(', ' / 4);\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var ListItem = exports.ListItem = _styledComponents2.default.li(_templateObject, _textStyles.textStylesBase, gridSchema.gutter);