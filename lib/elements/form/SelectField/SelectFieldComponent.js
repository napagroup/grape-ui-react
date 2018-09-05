'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectFieldComponent = undefined;

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

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectFieldComponent = exports.SelectFieldComponent = function SelectFieldComponent(props) {
  var isDisabled = props.isDisabled,
      multiple = props.multiple,
      plainText = props.plainText,
      validationError = props.validationError;

  var textBase = (0, _textStyles.textStylesBase)(props);
  var controlBase = !validationError ? (0, _baseControlStyle.controlStylesBase)(props) : (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));

  var ProtoBase = (0, _styledComponents2.default)(_reactSelect2.default).attrs({
    readOnly: plainText,
    tabIndex: !plainText ? '0' : '-1',
    isDisabled: plainText || isDisabled,
    isMulti: multiple
  })(_templateObject, textBase, controlBase);

  return _react2.default.createElement(ProtoBase, (0, _componentHelpers.passThrough)(SelectFieldComponent, props));
};

SelectFieldComponent.propTypes = {
  activeColor: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  isDisabled: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  padding: _propTypes2.default.string,
  plainText: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  validationError: _propTypes2.default.string
};

SelectFieldComponent.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  borderColor: _baseControlStyle.defaultControlStylesBase.borderColor,
  borderRadius: _baseControlStyle.defaultControlStylesBase.borderRadius,
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  isDisabled: false,
  lg: _textStyles.defaultTextStylesBase.lg,
  multiple: false,
  padding: _baseControlStyle.defaultControlStylesBase.padding,
  plainText: _baseControlStyle.defaultControlStylesBase.plainText,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration,
  validationError: ''
};