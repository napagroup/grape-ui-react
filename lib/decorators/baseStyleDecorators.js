'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBaseStyles = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _textStyles = require('../elements/typography/textStyles');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var withBaseStyles = function withBaseStyles(component, props) {
  var base = (0, _textStyles.textStylesBase)(props);
  return component.extend(_templateObject, base);
};

exports.withBaseStyles = withBaseStyles;