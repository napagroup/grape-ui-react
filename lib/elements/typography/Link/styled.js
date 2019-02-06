'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  &:hover,\n  ', '\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  &:hover,\n  ', '\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _componentHelpers = require('../../../utils/componentHelpers');

var _component = require('./component');

var _textStyles = require('../textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getHoverColor = function getHoverColor(props) {
  return '&:active {\n  color: ' + (0, _componentHelpers.resolveColor)(props.hoverColor) + ';\n }';
};

var Link = (0, _styledComponents2.default)(_component.LinkComponent)(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, getHoverColor);

Link.propTypes = Object.assign({}, _textStyles.typography.propTypes, {
  hoverColor: _propTypes2.default.string,
  to: _propTypes2.default.string
});

Link.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
};

Link.Router = Link;
exports.Link = Link;