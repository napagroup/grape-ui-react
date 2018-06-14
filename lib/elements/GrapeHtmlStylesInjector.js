'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grapeHtmlStylesInjector = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    font-family: ', ';\n    font-size: ', ';\n  }\n'], ['\n  html {\n    font-family: ', ';\n    font-size: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _globalStyles = require('../global-styles');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    fontFamilySchema = _getGlobalStyles.fontFamily;

var grapeHtmlStylesInjector = exports.grapeHtmlStylesInjector = (0, _styledComponents.injectGlobal)(_templateObject, fontFamilySchema.base, fontSizeSchema.baseFontSize);