'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  line-height: 1.5;\n  ', '\n'], ['\n  line-height: 1.5;\n  ', '\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textStylesBase = exports.textStylesBase = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.italic ? 'text-style: italic;' : '';
});