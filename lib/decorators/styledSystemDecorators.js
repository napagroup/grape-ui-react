'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withStyledSystem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      ', '\n      ', '\n    '], ['\n      ', '\n      ', '\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  ']);

var _styledSystem = require('styled-system');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var withStyledSystem = function withStyledSystem(component, props) {
  var disallowAllStyled = props.disallowAllStyled,
      allowStyledSpace = props.allowStyledSpace,
      allowStyledWidth = props.allowStyledWidth;

  if (disallowAllStyled) {
    return component.extend(_templateObject, allowStyledSpace ? (0, _styledSystem.space)(props) : '', allowStyledWidth ? (0, _styledSystem.width)(props) : '');
  }
  return component.extend(_templateObject2, (0, _styledSystem.alignContent)(props), (0, _styledSystem.alignItems)(props), (0, _styledSystem.alignSelf)(props), (0, _styledSystem.display)(props), (0, _styledSystem.bottom)(props), (0, _styledSystem.flexBasis)(props), (0, _styledSystem.flexDirection)(props), (0, _styledSystem.flexWrap)(props), (0, _styledSystem.height)(props), (0, _styledSystem.justifyContent)(props), (0, _styledSystem.left)(props), (0, _styledSystem.maxHeight)(props), (0, _styledSystem.maxWidth)(props), (0, _styledSystem.minHeight)(props), (0, _styledSystem.minWidth)(props), (0, _styledSystem.position)(props), (0, _styledSystem.ratio)(props), (0, _styledSystem.right)(props), (0, _styledSystem.size)(props), (0, _styledSystem.space)(props), _styledSystem.textAlign, _styledSystem.textColor, (0, _styledSystem.textStyle)(props), (0, _styledSystem.top)(props), (0, _styledSystem.width)(props), (0, _styledSystem.zIndex)(props), (0, _styledSystem.flex)(props), (0, _styledSystem.order)(props));
};

exports.withStyledSystem = withStyledSystem;