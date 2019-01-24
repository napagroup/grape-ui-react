'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledReactRouterLink = exports.Link = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  &:hover,\n  ', '\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  &:hover,\n  ', '\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _componentHelpers = require('../../utils/componentHelpers');

var _reactRouterDom = require('react-router-dom');

var _textStyles = require('./textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getHoverColor = function getHoverColor(props) {
  return '&:active {\n  color: ' + (0, _componentHelpers.resolveColor)(props.hoverColor) + ';\n }';
};

var Link = _styledComponents2.default.a(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, getHoverColor);
var StyledReactRouterLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, getHoverColor);

Link.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string,
  italic: _propTypes2.default.bool,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

Link.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
};

StyledReactRouterLink.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string,
  italic: _propTypes2.default.bool,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  to: _propTypes2.default.string
};

StyledReactRouterLink.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
};

exports.Link = Link;
exports.StyledReactRouterLink = StyledReactRouterLink;