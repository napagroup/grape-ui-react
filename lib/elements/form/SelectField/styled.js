"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.SelectFieldComponent = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AssistiveText = require("../../../elements/form/AssistiveText");

var _ControlGroup = require("../../../elements/form/ControlGroup");

var _PlainText = require("../../../elements/form/PlainText");

var _globalStyles = require("../../../global-styles");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlStylesSelectField = function controlStylesSelectField(props) {
  if (props.validationError) {
    return (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    }));
  }

  return (0, _styledHelpers.controlStyles)(props);
};

var getIndicatorsHeight = function getIndicatorsHeight(props) {
  var formStyle = props.formStyle,
      labelText = props.labelText;
  if (formStyle === 'filled' && labelText) return 'calc(100% - 1rem)';
  return '100%';
};

var focusStyleSelectField = function focusStyleSelectField(props) {
  if (props.isFocused) {
    return (0, _styledHelpers.focusStyles)(props);
  }

  return '';
};

var disabledStyleSelectField = function disabledStyleSelectField(props) {
  if (props.isDisabled) {
    return _styledHelpers.disabledStyle;
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
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var padding = _styledHelpers.defaultControlStyles.padding;
  var indicatorsWidth = '40px';
  return "\n    .grape-ui-select__control {\n      display: flex;\n      border: 0;\n      box-shadow: none;\n      min-height: 0;\n    }\n    .grape-ui-select__indicator {\n      padding: 0;\n    }\n    .grape-ui-select__indicator-separator {\n      display: none;\n    }\n    .grape-ui-select__value-container {\n      padding: 0;\n      padding-right: ".concat(indicatorsWidth, ";\n    }\n    .grape-ui-select__menu {\n      position: absolute;\n      left: 0;\n      margin: 0;\n      padding: 0.5rem 0;\n      ").concat((0, _styledHelpers.resolveElevation)('03', globalOverrides), "\n    }\n    .grape-ui-select__option {\n      padding: 0.5rem 1rem;\n    }\n    .grape-ui-select__option--is-focused {\n      background: ").concat((0, _styledHelpers.resolveColor)(menuFocusBg, globalOverrides), ";\n      color: ").concat((0, _styledHelpers.resolveColor)(menuFocusColor, globalOverrides), ";\n    }\n    .grape-ui-select__option--is-selected {\n      background: ").concat((0, _styledHelpers.resolveColor)(menuSelectedBg, globalOverrides), ";\n      color: ").concat((0, _styledHelpers.resolveColor)(menuSelectedColor, globalOverrides), ";\n    }\n    .grape-ui-select__placeholder {\n      color: ").concat((0, _styledHelpers.resolveColor)(placeholderColor, globalOverrides), ";\n    }\n    .grape-ui-select__multi-value {\n      display: flex;\n      margin: 0.25rem;\n      padding: 0.25rem;\n      border-radius: 4px;\n      background-color: ").concat((0, _styledHelpers.resolveColor)(chipBg, globalOverrides), ";\n      font-size: 80%;\n    }\n    .grape-ui-select__multi-value__label {\n      padding: 0 0.25rem;\n    }\n    .grape-ui-select__multi-value__remove {\n      cursor: pointer;\n      &:hover path {\n        fill: ").concat((0, _styledHelpers.resolveColor)('brandLinkHover', globalOverrides), "\n      }\n    }\n    .grape-ui-select__indicators {\n      height: ").concat(getIndicatorsHeight(props), ";\n      justify-content: flex-end;\n      position: absolute;\n      right: ").concat(padding, ";\n      bottom: 0;\n      width: ").concat(indicatorsWidth, ";\n    }\n    &.grape-ui-select--is-rtl {\n      .grape-ui-select__value-container {\n        padding-right: 0;\n        padding-left: ").concat(indicatorsWidth, ";\n      }\n      .grape-ui-select__indicators {\n        left: ").concat(padding, ";\n        right: auto;\n      }\n    }\n  ");
};

var SelectFieldComponent = exports.SelectFieldComponent = (0, _styledComponents2["default"])(_component.SelectComponent)(_templateObject(), _styledHelpers.controlColor, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, controlStylesSelectField, focusStyleSelectField, reactSelectStylesOverrides, disabledStyleSelectField);
SelectFieldComponent.propTypes = _objectSpread({}, _styledHelpers.control.propTypes, {
  bg: _propTypes2["default"].string,
  chipBg: _propTypes2["default"].string,
  formStyle: _propTypes2["default"].string,
  isDisabled: _propTypes2["default"].bool,
  isFocused: _propTypes2["default"].bool,
  menuFocusBg: _propTypes2["default"].string,
  menuFocusColor: _propTypes2["default"].string,
  menuSelectedBg: _propTypes2["default"].string,
  menuSelectedColor: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2["default"].string
});
SelectFieldComponent.defaultProps = _objectSpread({}, _styledHelpers.defaultControlStyles, {}, _styledHelpers.defaultStylesBase, {
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
  return _react2["default"].createElement(SelectFieldComponent, _extends({}, selectFieldProps, {
    value: value || defaultValue
  }));
};

var propsToTrim = ['controlGroupProps', 'controlId', 'disabled', 'assistiveText', 'isRequired', 'plainText'];
var plaintextPropsToTrim = ['controlId', 'assistiveText', 'validationError', 'isRequired', 'formStyle', 'controlGroupProps'];

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      disabled = propsFromComponent.disabled,
      plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, plaintextPropsToTrim);
    return _react2["default"].createElement(_PlainText.PlainText, plainTextProps);
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
      assistiveTextProps = props.assistiveTextProps,
      bg = props.bg,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      disabled = props.disabled,
      assistiveText = props.assistiveText,
      isRequired = props.isRequired,
      labelText = props.labelText,
      validationError = props.validationError;
  var assistiveProps = {
    assistiveText: assistiveText,
    isRequired: isRequired
  };
  var newlabel = !isRequired ? labelText : "".concat(labelText, "*");
  return _react2["default"].createElement(_ControlGroup.ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    labelText: newlabel,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, props)));
};

SelectField.propTypes = _objectSpread({
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  assistiveTextProps: _propTypes2["default"].object,
  controlGroupProps: _propTypes2["default"].object,
  controlId: _propTypes2["default"].string,
  controlLabelProps: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  formStyle: _propTypes2["default"].string,
  isRequired: _propTypes2["default"].bool,
  labelText: _propTypes2["default"].string,
  plainText: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].string
}, _styledSystem.borderRadius.propTypes, {}, _styledSystem.space.propTypes);
SelectField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  formStyle: '',
  isRequired: false,
  labelText: '',
  plainText: false,
  validationError: ''
};