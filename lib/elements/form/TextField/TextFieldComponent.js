'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldComponent = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _decorators = require('../../../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextFieldComponent = exports.TextFieldComponent = function TextFieldComponent(props) {
  var textBase = (0, _textStyles.textStylesBase)(props);
  var controlBase = (0, _baseControlStyle.controlStylesBase)(props);
  var ProtoBase = _styledComponents2.default.input.attrs({
    type: 'text'
  })(_templateObject, textBase, controlBase);
  var ProtoStyledSystem = (0, _decorators.withStyledSystem)(ProtoBase, props);
  return _react2.default.createElement(ProtoStyledSystem, (0, _componentHelpers.passThrough)(TextFieldComponent, props));
};

TextFieldComponent.propTypes = Object.assign({
  allowStyledWidth: _propTypes2.default.bool,
  borderColor: _propTypes2.default.string,
  borderColorActive: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  color: _propTypes2.default.string,
  disallowAllStyled: _propTypes2.default.bool,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  padding: _propTypes2.default.string,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
}, _styledSystem.width.propTypes);

TextFieldComponent.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration,
  borderColor: _baseControlStyle.defaultControlStylesBase.borderColor,
  borderColorActive: _baseControlStyle.defaultControlStylesBase.borderColorActive,
  borderRadius: _baseControlStyle.defaultControlStylesBase.borderRadius,
  padding: _baseControlStyle.defaultControlStylesBase.padding,
  disallowAllStyled: true,
  allowStyledWidth: true,
  width: 1
};