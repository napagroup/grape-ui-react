'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrapeGlobal = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    font-family: ', ';\n  }\n  body {\n    font-size: ', ';\n  }\n'], ['\n  html {\n    font-family: ', ';\n  }\n  body {\n    font-size: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _fontSize = require('../assets/json/fontSize.json');

var fontSizeAssets = _interopRequireWildcard(_fontSize);

var _fontFamily = require('../assets/json/fontFamily.json');

var fontFamilyAssets = _interopRequireWildcard(_fontFamily);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GrapeGlobal = exports.GrapeGlobal = (0, _styledComponents.injectGlobal)(_templateObject, fontFamilyAssets.base, fontSizeAssets.baseFontSize);