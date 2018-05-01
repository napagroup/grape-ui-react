'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  line-height: 1.5;\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  line-height: 1.5;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fontFamily = require('../../assets/json/fontFamily');

var _fontSize = require('../../assets/json/fontSize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseFontFamily = _fontFamily.native;
var baseFontSize = _fontSize.base;

var textStylesBase = (0, _styledComponents.css)(_templateObject, baseFontFamily, baseFontSize);

var Paragraph = exports.Paragraph = _styledComponents2.default.p(_templateObject2, textStylesBase);