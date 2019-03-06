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

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hoverStyle = function hoverStyle(props) {
  return '&:active {\n  color: ' + (0, _styledHelpers.resolveColor)(props.hoverStyle) + ';\n  cursor: pointer;\n }';
};

var Link = (0, _styledComponents2.default)(_component.LinkComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, hoverStyle);

Link.propTypes = Object.assign({}, _styledHelpers.typography.propTypes, {
  hoverStyle: _propTypes2.default.string,
  to: _propTypes2.default.string
});

Link.defaultProps = Object.assign({}, _styledHelpers.defaultStylesBase, {
  color: 'brandLink',
  hoverStyle: 'brandLinkHover',
  textDecoration: 'none'
});

Link.Router = Link;
exports.Link = Link;