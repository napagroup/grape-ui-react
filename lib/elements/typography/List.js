'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n    ', '\n    ', '\n    ', '\n    '], ['\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    margin: 0 0 ', ';\n    ', '\n    ', '\n    ', '\n    ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../global-styles');

var _utils = require('./utils');

var _textStyles = require('./textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var getInLineStyles = function getInLineStyles(props) {
  var inlineStyles = '\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ' + (0, _utils.getScaledSize)(gridSchema.gutter, 0.5) + ';\n      }\n    }\n  ';
  return '' + (props.inline ? inlineStyles : '');
};

var getPaddingLeft = function getPaddingLeft(props) {
  return 'padding-left:  ' + (props.unstyled || props.inline ? '0' : '2.5rem') + ';';
};
var getListStyle = function getListStyle(props) {
  return '' + (props.unstyled ? '> li { list-style: none; }' : '');
};

var ListFactory = function ListFactory(factoryProps) {
  var tag = factoryProps.tag;

  return _styledComponents2.default[tag](_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, gridSchema.gutter, getPaddingLeft, getListStyle, getInLineStyles);
};

var List = ListFactory({ tag: 'ul' });

List.ul = List;
List.ol = ListFactory({ tag: 'ol' });
List.propTypes = {
  color: _propTypes2.default.string,
  display: _propTypes2.default.bool,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  unstyled: _propTypes2.default.bool
};
exports.List = List;