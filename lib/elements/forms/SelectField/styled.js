"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.SelectFieldComponent = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var SelectFieldComponent = (0, _styledComponents["default"])(_component.SelectComponent)(_templateObject(), _styledHelpers.controlColor, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, controlStylesSelectField, focusStyleSelectField, disabledStyleSelectField);
exports.SelectFieldComponent = SelectFieldComponent;
SelectFieldComponent.propTypes = _objectSpread({}, _styledHelpers.control.propTypes, {
  bg: _propTypes["default"].string,
  formStyle: _propTypes["default"].string,
  isDisabled: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  menuSelectedBg: _propTypes["default"].string,
  menuSelectedColor: _propTypes["default"].string,
  multiple: _propTypes["default"].bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string])
});
SelectFieldComponent.defaultProps = _objectSpread({}, _styledHelpers.defaultControlStyles, {}, _styledHelpers.defaultStylesBase, {
  bg: null,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: ''
});

var renderSelectFieldComponent = function renderSelectFieldComponent(selectFieldProps) {
  var defaultValue = selectFieldProps.defaultValue,
      value = selectFieldProps.value;
  return /*#__PURE__*/_react["default"].createElement(SelectFieldComponent, _extends({}, selectFieldProps, {
    value: value || defaultValue
  }));
};

var propsToTrim = ['assistiveText', 'controlGroupProps', 'controlId', 'disabled', 'isRequired', 'plainText'];

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      disabled = propsFromComponent.disabled,
      name = propsFromComponent.name,
      plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return /*#__PURE__*/_react["default"].createElement(_utils.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId || name,
    isDisabled: disabled
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));

  return renderSelectFieldComponent(childProps);
};

var SelectField = function SelectField(props) {
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
      name = props.name,
      validationError = props.validationError;
  var assistiveProps = {
    assistiveText: assistiveText,
    isRequired: isRequired
  };
  var newlabel = isRequired && labelText ? "".concat(labelText, "*") : labelText;
  return /*#__PURE__*/_react["default"].createElement(_utils.ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, props)));
};

exports.SelectField = SelectField;
SelectField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes["default"].string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes["default"].object,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: _propTypes["default"].object,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
  */
  controlId: _propTypes["default"].string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: _propTypes["default"].object,

  /** Basic HTML attribute, needed for styling. */
  disabled: _propTypes["default"].bool,

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes["default"].string,

  /** Allows for a ref to be defined to the DOM input.
   * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: _styledHelpers.refType,

  /** Should be used when the control is not meant to be required and is able to handle a null value.
   * @see See [React-Select/Select-Props](https://react-select.com/props#select-props) for more on this prop. */
  isClearable: _propTypes["default"].bool,

  /** Using React-Select's `Creatable` control, this allows dropdowns to allow for custom values.
   * @see See [React-Select/Creatable](https://react-select.com/creatable) for more on this control. */
  isCreatable: _propTypes["default"].bool,

  /** Allows for multiple options, each displayed as a chip. */
  isMulti: _propTypes["default"].bool,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes["default"].bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes["default"].string,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: _propTypes["default"].string,

  /** Use this to overwrite the z-index manually. */
  menuZIndex: _propTypes["default"].string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes["default"].string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes["default"].bool,

  /** Can be used to override specific styling on particular aspects of the control.
   * @see See [React-Select/Styles](https://react-select.com/styles) for a full list of style keys. */
  styleOverrides: _propTypes["default"].object,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string])
}, _styledSystem.borderRadius.propTypes, {}, _styledHelpers.spaceProps.propTypes);
SelectField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  formStyle: '',
  inputRef: function inputRef() {},
  isClearable: false,
  isCreatable: false,
  isMulti: false,
  isRequired: false,
  labelText: '',
  menuElevation: '01',
  menuZIndex: '',
  name: '',
  plainText: false,
  styleOverrides: {},
  validationError: ''
};
/** @component */