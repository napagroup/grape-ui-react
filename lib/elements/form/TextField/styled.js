'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.TextFieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  '], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _component = require('./component');

var _styledSystem = require('styled-system');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var controlBaseStyles = function controlBaseStyles(props) {
  return !props.validationError ? (0, _baseControlStyle.controlStylesBase)(props) : (0, _baseControlStyle.controlStylesBase)(Object.assign({}, props, { borderColor: (0, _componentHelpers.resolveColor)('brandDanger'), activeColor: (0, _componentHelpers.resolveColor)('brandDanger') }));
};

var TextFieldComponent = exports.TextFieldComponent = (0, _styledComponents2.default)(_component.TextInputComponent)(_templateObject, _textStyles.getFontFamily, _textStyles.getFontSize, _textStyles.getFontWeight, _textStyles.getLetterSpacing, _textStyles.getLineHeight, _textStyles.getFontStyle, _textStyles.getColor, _textStyles.getTextAlign, _textStyles.getTextDecoration, controlBaseStyles);

TextFieldComponent.propTypes = Object.assign({}, _baseControlStyle.control.propTypes, _textStyles.typography.propTypes, {
  validationError: _propTypes2.default.string
});

TextFieldComponent.defaultProps = Object.assign({}, _baseControlStyle.defaultControlStylesBase, {
  validationError: ''
});

var getAssistiveText = function getAssistiveText(props) {
  var assistiveText = props.assistiveText,
      required = props.required;

  if (required && !assistiveText) {
    return '*Required';
  }
  return assistiveText;
};

var TextField = function TextField(props) {
  var activeColor = props.activeColor,
      bgColor = props.bgColor,
      controlId = props.controlId,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ['activeColor', 'bgColor', 'controlId', 'labelText', 'required', 'validationError']);

  var childProps = Object.assign({ id: controlId, required: required }, (0, _componentHelpers.passThrough)(TextField, otherProps));
  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    {
      activeColor: activeColor,
      assistiveText: getAssistiveText(props),
      bgColor: bgColor,
      controlId: controlId,
      labelText: labelText,
      pb: 3,
      pt: 1,
      validationError: validationError
    },
    _react2.default.createElement(TextFieldComponent, _extends({ validationError: validationError }, childProps))
  );
};

exports.TextField = TextField;
TextField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  labelText: _propTypes2.default.string.isRequired,
  required: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

TextField.defaultProps = {
  activeColor: _baseControlStyle.defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  required: false,
  validationError: ''
};