'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n    padding-left:  ', ';\n    ', '\n    ', '\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n    padding-left:  ', ';\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

var _utils = require('./utils');

var _componentHelpers = require('../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var getInLineStyles = function getInLineStyles(inline) {
  var inlineStyles = '\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ' + (0, _utils.getScaledSize)(gridSchema.gutter, 0.5) + ';\n      }\n    }\n  ';
  return '' + (inline ? inlineStyles : '');
};

var ListFactory = function ListFactory(props) {
  var inline = props.inline,
      unstyled = props.unstyled,
      listTag = props.tag;

  var tag = listTag || 'ul';
  var ProtoList = _styledComponents2.default[tag](_templateObject, (0, _textStyles.textStylesBase)(props), gridSchema.gutter, unstyled || inline ? '0' : '2.5rem', unstyled ? '> li { list-style: none; }' : '', getInLineStyles(inline));
  return _react2.default.createElement(ProtoList, (0, _componentHelpers.passThrough)(ListFactory, props));
};

ListFactory.propTypes = {
  color: _propTypes2.default.string,
  display: _propTypes2.default.bool,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  inline: _propTypes2.default.bool,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  unstyled: _propTypes2.default.bool
};

ListFactory.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  display: false,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  inline: false,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  tag: 'ul',
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration,
  unstyled: false
};

var List = function List(props) {
  return ListFactory(props);
};

List.ul = List;
List.ol = function (props) {
  return ListFactory(Object.assign({}, props, { tag: 'ol' }));
};

exports.List = List;