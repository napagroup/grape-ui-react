'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  font-size: ', ';\n'], ['\n  ', '\n  font-size: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['font-size: ', ';'], ['font-size: ', ';']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSize = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.h1(_templateObject, _textStyles.textStylesBase, fontSize.h1);

Header.h1 = Header;
Header.h2 = Header.withComponent('h2').extend(_templateObject2, fontSize.h2);
Header.h3 = Header.withComponent('h3').extend(_templateObject2, fontSize.h3);
Header.h4 = Header.withComponent('h4').extend(_templateObject2, fontSize.h4);
Header.h5 = Header.withComponent('h5').extend(_templateObject2, fontSize.h5);
Header.h6 = Header.withComponent('h6').extend(_templateObject2, fontSize.h6);

exports.Header = Header;