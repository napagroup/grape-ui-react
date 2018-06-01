'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

var _componentHelpers = require('../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var HeaderFactory = function HeaderFactory(props) {
  var display = props.display,
      propsTag = props.tag;


  var tag = propsTag || 'h1';
  var overrides = Object.assign({}, props, {
    fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    fontWeight: display ? '300' : _textStyles.defaultTextStylesBase.fontWeight
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var Primitive = _styledComponents2.default[tag](_templateObject, baseStyles, gridSchema.gutter);
  return _react2.default.createElement(Primitive, (0, _componentHelpers.passThrough)(HeaderFactory, props));
};

HeaderFactory.propTypes = {
  color: _propTypes2.default.string,
  display: _propTypes2.default.bool,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
};

HeaderFactory.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  display: false,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  tag: 'h1',
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
};

var Header = function Header(props) {
  return HeaderFactory(props);
};

Header.h1 = Header;
Header.h2 = function (props) {
  return HeaderFactory(Object.assign({}, props, { tag: 'h2' }));
};
Header.h3 = function (props) {
  return HeaderFactory(Object.assign({}, props, { tag: 'h3' }));
};
Header.h4 = function (props) {
  return HeaderFactory(Object.assign({}, props, { tag: 'h4' }));
};
Header.h5 = function (props) {
  return HeaderFactory(Object.assign({}, props, { tag: 'h5' }));
};
Header.h6 = function (props) {
  return HeaderFactory(Object.assign({}, props, { tag: 'h6' }));
};
exports.Header = Header;