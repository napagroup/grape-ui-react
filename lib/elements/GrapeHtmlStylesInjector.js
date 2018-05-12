'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grapeHtmlStylesInjector = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    font-family: ', ';\n    font-size: ', ';\n  }\n'], ['\n  html {\n    font-family: ', ';\n    font-size: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _fontSize = require('../assets/json/fontSize.json');

var fontSizeSchema = _interopRequireWildcard(_fontSize);

var _fontFamily = require('../assets/json/fontFamily.json');

var fontFamilySchema = _interopRequireWildcard(_fontFamily);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var grapeHtmlStylesInjector = exports.grapeHtmlStylesInjector = (0, _styledComponents.injectGlobal)(_templateObject, fontFamilySchema.base, fontSizeSchema.baseFontSize);