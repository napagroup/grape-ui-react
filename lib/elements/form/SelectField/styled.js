"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.SelectFieldComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require("../../../elements/form/ControlGroup");

var _globalStyles = require("../../../global-styles");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledSystem = require("styled-system");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledHelpers = require("../../../utils/styledHelpers");

var _PlainText = require("../../../elements/form/PlainText");

var _AssistiveText = require("../../../elements/form/AssistiveText");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlStylesSelectField = function controlStylesSelectField(props) {
  if (!props.validationError && !props.isDisabled) {
    return (0, _styledHelpers.controlStyles)(props);
  }

  if (props.validationError) {
    return (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    }));
  }

  return (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
    activeColor: 'white.light',
    borderColor: 'white.light'
  }));
};

var focusStyleSelectField = function focusStyleSelectField(props) {
  if (props.isFocused) {
    return (0, _styledHelpers.focusStyles)(props);
  }

  return '';
};

var reactSelectStylesOverrides = function reactSelectStylesOverrides(props) {
  var chipBg = props.chipBg,
      formStyle = props.formStyle,
      menuFocusBg = props.menuFocusBg,
      menuFocusColor = props.menuFocusColor,
      menuSelectedBg = props.menuSelectedBg,
      menuSelectedColor = props.menuSelectedColor,
      placeholderColor = props.placeholderColor;
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var dropdownOffset = formStyle === 'filled' ? '.grape-ui-select__dropdown-indicator { margin-top: -0.5rem; }' : '';
  return "\n    .grape-ui-select__control {\n      display: flex;\n      border: 0;\n      box-shadow: none;\n      min-height: 0;\n    }\n    .grape-ui-select__indicator {\n      padding: 0;\n    }\n    .grape-ui-select__indicator-separator {\n      display: none;\n    }\n    .grape-ui-select__value-container {\n      padding: 0;\n    }\n    .grape-ui-select__menu {\n      position: absolute;\n      left: 0;\n      margin: 0;\n      padding: 0.5rem 0;\n      ".concat((0, _styledHelpers.resolveElevation)('03', globalOverrides), "\n    }\n    .grape-ui-select__option {\n      padding: 0.5rem 1rem;\n    }\n    .grape-ui-select__option--is-focused {\n      background: ").concat((0, _styledHelpers.resolveColor)(menuFocusBg, globalOverrides), ";\n      color: ").concat((0, _styledHelpers.resolveColor)(menuFocusColor, globalOverrides), ";\n    }\n    .grape-ui-select__option--is-selected {\n      background: ").concat((0, _styledHelpers.resolveColor)(menuSelectedBg, globalOverrides), ";\n      color: ").concat((0, _styledHelpers.resolveColor)(menuSelectedColor, globalOverrides), ";\n    }\n    .grape-ui-select__placeholder {\n      color: ").concat((0, _styledHelpers.resolveColor)(placeholderColor, globalOverrides), ";\n    }\n    .grape-ui-select__multi-value {\n      display: flex;\n      margin: 0.25rem;\n      padding: 0.25rem;\n      border-radius: 4px;\n      background-color: ").concat((0, _styledHelpers.resolveColor)(chipBg, globalOverrides), ";\n      font-size: 80%;\n    }\n    .grape-ui-select__multi-value__label {\n      padding: 0 0.25rem;\n    }\n    .grape-ui-select__multi-value__remove {\n      cursor: pointer;\n      &:hover path {\n        fill: ").concat((0, _styledHelpers.resolveColor)('brandLinkHover', globalOverrides), "\n      }\n    }\n    &:has(.grape-ui-select__control--is-focused) {  }\n    ").concat(dropdownOffset, "\n  ");
};

var SelectFieldComponent = exports.SelectFieldComponent = (0, _styledComponents2.default)(_component.SelectComponent)(_templateObject(), _styledHelpers.controlColor, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, controlStylesSelectField, focusStyleSelectField, reactSelectStylesOverrides);
SelectFieldComponent.propTypes = _objectSpread({}, _styledHelpers.control.propTypes, {
  bg: _propTypes2.default.string,
  chipBg: _propTypes2.default.string,
  formStyle: _propTypes2.default.string,
  isDisabled: _propTypes2.default.bool,
  isFocused: _propTypes2.default.bool,
  menuFocusBg: _propTypes2.default.string,
  menuFocusColor: _propTypes2.default.string,
  menuSelectedBg: _propTypes2.default.string,
  menuSelectedColor: _propTypes2.default.string,
  multiple: _propTypes2.default.bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2.default.string
});
SelectFieldComponent.defaultProps = _objectSpread({}, _styledHelpers.defaultControlStyles, _styledHelpers.defaultStylesBase, {
  bg: null,
  chipBg: 'white.dark',
  formStyle: '',
  isDisabled: false,
  isFocused: false,
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
  return _react2.default.createElement(SelectFieldComponent, _extends({}, selectFieldProps, {
    value: value || defaultValue
  }));
};

var propsToTrim = [// 'activeColor',
'bg', 'controlId', 'disabled', 'assistiveText', 'labelText', 'required', 'plainText'];
var plaintextPropsToTrim = ['controlId', 'labelText', 'assistiveText', 'validationError', 'required', 'formStyle'];

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      disabled = propsFromComponent.disabled,
      plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, plaintextPropsToTrim);
    return _react2.default.createElement(_PlainText.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
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
      formStyle = props.formStyle,
      assistiveText = props.assistiveText,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      plainText = props.plainText;
  var assistiveProps = {
    assistiveText: assistiveText,
    required: required
  };
  var newlabel = !required ? labelText : "".concat(labelText, "*");
  return _react2.default.createElement(_ControlGroup.ControlGroup, {
    activeColor: activeColor,
    assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
    bg: bg,
    controlId: controlId,
    disabled: disabled,
    labelText: newlabel,
    pb: 3,
    pt: 1,
    validationError: validationError
  }, renderValueOrComponent(_objectSpread({
    formStyle: formStyle,
    plainText: plainText
  }, props)));
};

SelectField.propTypes = _objectSpread({
  activeColor: _propTypes2.default.string,
  assistiveText: _propTypes2.default.string,
  controlId: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  formStyle: _propTypes2.default.string,
  labelText: _propTypes2.default.string.isRequired,
  plainText: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  validationError: _propTypes2.default.string
}, _styledSystem.space.propTypes);
SelectField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  disabled: false,
  formStyle: '',
  plainText: false,
  required: false,
  validationError: ''
};