'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSize = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = exports.Header = function Header(props) {
  var fontSizeBase = fontSize.h1;
  var HeaderPrimitive = _styledComponents2.default.h1(_templateObject, _textStyles.textStylesBase);
  return HeaderPrimitive;
};