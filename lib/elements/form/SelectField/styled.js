'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.SelectFieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _styledSystem = require('styled-system');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledHelpers = require('../../../utils/styledHelpers');

var _PlainText = require('../../../elements/form/PlainText');

var _AssistiveText = require('../../../elements/form/AssistiveText');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var controlStylesSelectField = function controlStylesSelectField(props) {
  if (!props.validationError && !props.isDisabled) {
    return (0, _styledHelpers.controlStyles)(props);
  }if (props.validationError) {
    return (0, _styledHelpers.controlStyles)(Object.assign({}, props, { activeColor: 'brandDanger', borderColor: 'brandDanger' }));
  }
  return (0, _styledHelpers.controlStyles)(Object.assign({}, props, { activeColor: 'white.light', borderColor: 'white.light' }));
};
var focusStyleSelectField = function focusStyleSelectField(props) {
  if (props.isFocused) {
    return (0, _styledHelpers.focusStyles)(props);
  }
  return '';
};

var reactSelectStylesOverrides = function reactSelectStylesOverrides(props) {
  var chipBg = props.chipBg,
      menuFocusBg = props.menuFocusBg,
      menuFocusColor = props.menuFocusColor,
      menuSelectedBg = props.menuSelectedBg,
      menuSelectedColor = props.menuSelectedColor,
      placeholderColor = props.placeholderColor;

  return '\n  .grape-ui-select__control {\n    display: flex;\n  }\n  .grape-ui-select__indicator {\n    padding: 0;\n  }\n  .grape-ui-select__indicator-separator {\n    display: none;\n  }\n  .grape-ui-select__value-container {\n    padding: 0;\n  }\n  .grape-ui-select__menu {\n    position: absolute;\n    left: 0;\n    margin: 0;\n    padding: 0.5rem 0;\n    ' + (0, _styledHelpers.resolveElevation)('03') + '\n  }\n  .grape-ui-select__option {\n    padding: 0.5rem 1rem;\n  }\n  .grape-ui-select__option--is-focused {\n    background: ' + (0, _styledHelpers.resolveColor)(menuFocusBg) + ';\n    color: ' + (0, _styledHelpers.resolveColor)(menuFocusColor) + ';\n  }\n  .grape-ui-select__option--is-selected {\n    background: ' + (0, _styledHelpers.resolveColor)(menuSelectedBg) + ';\n    color: ' + (0, _styledHelpers.resolveColor)(menuSelectedColor) + ';\n  }\n  .grape-ui-select__placeholder {\n    color: ' + (0, _styledHelpers.resolveColor)(placeholderColor) + ';\n  }\n  .grape-ui-select__multi-value {\n    display: flex;\n    margin-right: 0.25rem;\n    padding: 0.25rem;\n    border-radius: 4px;\n    background-color: ' + (0, _styledHelpers.resolveColor)(chipBg) + ';\n    font-size: 80%;\n  }\n  .grape-ui-select__multi-value__label {\n    padding: 0 0.25rem;\n  }\n  .grape-ui-select__multi-value__remove {\n    cursor: pointer;\n    &:hover path {\n      fill: ' + (0, _styledHelpers.resolveColor)('brandLinkHover') + '\n    }\n  }\n';
};

var SelectFieldComponent = exports.SelectFieldComponent = (0, _styledComponents2.default)(_component.SelectComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, controlStylesSelectField, focusStyleSelectField, reactSelectStylesOverrides);
SelectFieldComponent.propTypes = Object.assign({}, _styledHelpers.control.propTypes, {
  chipBg: _propTypes2.default.string,
  isDisabled: _propTypes2.default.bool,
  menuFocusBg: _propTypes2.default.string,
  menuFocusColor: _propTypes2.default.string,
  menuSelectedBg: _propTypes2.default.string,
  menuSelectedColor: _propTypes2.default.string,
  multiple: _propTypes2.default.bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2.default.string
});

SelectFieldComponent.defaultProps = Object.assign({
  chipBg: 'white.dark'
}, _styledHelpers.defaultControlStyles, _styledHelpers.defaultStylesBase, {
  isDisabled: false,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  validationError: ''
});

var renderSelectFieldComponent = function renderSelectFieldComponent(selectFieldProps) {
  var defaultValue = selectFieldProps.defaultValue,
      value = selectFieldProps.value;


  return _react2.default.createElement(SelectFieldComponent, _extends({}, selectFieldProps, { value: value || defaultValue }));
};
var propsToTrim = ['activeColor', 'bg', 'controlId', 'disabled', 'assistiveText', 'labelText', 'required', 'plainText'];
var plaintextPropsToTrim = ['controlId', 'labelText', 'assistiveText', 'validationError', 'required'];
var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      disabled = propsFromComponent.disabled,
      plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, plaintextPropsToTrim);
    return _react2.default.createElement(_PlainText.PlainText, plainTextProps);
  }
  var childProps = Object.assign({
    id: controlId
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim), {
    isDisabled: disabled
  });
  return renderSelectFieldComponent(childProps);
};
var SelectField = exports.SelectField = function SelectField(props) {
  var activeColor = props.activeColor,
      bg = props.bg,
      controlId = props.controlId,
      disabled = props.disabled,
      assistiveText = props.assistiveText,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      plainText = props.plainText;

  var assistiveProps = { assistiveText: assistiveText, required: required };
  var newlabel = !required ? labelText : labelText + '*';
  return _react2.default.createElement(
    _ControlGroup.ControlGroup,
    {
      activeColor: activeColor,
      assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
      bg: bg,
      controlId: controlId,
      disabled: disabled,
      labelText: newlabel,
      pb: 3,
      pt: 1,
      validationError: validationError
    },
    renderValueOrComponent(Object.assign({ plainText: plainText }, props))
  );
};

SelectField.propTypes = Object.assign({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  bg: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  labelText: _propTypes2.default.string.isRequired,
  plainText: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);

SelectField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bgColor,
  disabled: false,
  plainText: false,
  required: false,
  validationError: ''
};