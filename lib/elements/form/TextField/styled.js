"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.TextFieldComponent = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AssistiveText = require("../../../elements/form/AssistiveText");

var _ControlGroup = require("../../../elements/form/ControlGroup");

var _PlainText = require("../../../elements/form/PlainText");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlStylesTextField = function controlStylesTextField(props) {
  return !props.validationError ? (0, _styledHelpers.controlStyles)(props) : (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
    activeColor: 'brandDanger',
    borderColor: 'brandDanger'
  }));
};

var multilineStyles = function multilineStyles(props) {
  return props.multiline ? 'resize: none;' : '';
};

var TextFieldComponent = exports.TextFieldComponent = (0, _styledComponents2["default"])(_component.TextInputComponent)(_templateObject(), _styledHelpers.controlColor, controlStylesTextField, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, multilineStyles, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
TextFieldComponent.propTypes = _objectSpread({
  formStyle: _propTypes2["default"].string
}, _styledHelpers.control.propTypes, {}, _styledHelpers.typography.propTypes);
TextFieldComponent.defaultProps = _objectSpread({
  formStyle: ''
}, _styledHelpers.defaultControlStyles);
var propsToTrim = ['assistiveText', 'controlId', 'controlLabelProps', 'labelText', 'validationError'].concat(_toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)));

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return _react2["default"].createElement(_PlainText.PlainText, plainTextProps);
  }

  return _react2["default"].createElement(TextFieldComponent, propsFromComponent);
};

var TextField = exports.TextField = function TextField(props) {
  var activeColor = props.activeColor,
      assistiveTextProps = props.assistiveTextProps,
      bg = props.bg,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      formStyle = props.formStyle,
      isRequired = props.isRequired,
      labelText = props.labelText,
      name = props.name,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ["activeColor", "assistiveTextProps", "bg", "controlGroupProps", "controlId", "controlLabelProps", "formStyle", "isRequired", "labelText", "name", "validationError"]);

  var childProps = _objectSpread({
    activeColor: activeColor,
    bg: bg,
    formStyle: formStyle,
    id: controlId || name,
    isRequired: isRequired,
    labelText: labelText,
    name: name,
    validationError: validationError
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim));

  var newlabel = !isRequired ? labelText : "".concat(labelText, "*");
  return _react2["default"].createElement(_ControlGroup.ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: (0, _AssistiveText.getAssistiveText)(props),
    assistiveTextProps: assistiveTextProps,
    bg: _styledHelpers.defaultControlStyles.bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, childProps)));
};

TextField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes2["default"].string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes2["default"].object,

  /** Defines the background color for the control. */
  bg: _propTypes2["default"].string,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: _propTypes2["default"].object,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
  */
  controlId: _propTypes2["default"].string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: _propTypes2["default"].object,

  /** Basic HTML attribute, needed for styling. */
  disabled: _propTypes2["default"].bool,

  /** Allows for custom font family to be passed down to the control. */
  fontFamily: _propTypes2["default"].string,

  /**
  * Use 'filled' or 'outlined'
  * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes2["default"].string,

  /** Allows for a ref to be defined to the DOM input.
  * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: _styledHelpers.refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes2["default"].bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes2["default"].string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes2["default"].string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes2["default"].bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes2["default"].string
}, _styledSystem.borderRadius.propTypes);
TextField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: null,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  fontFamily: _styledHelpers.defaultControlStyles.fontFamily,
  formStyle: '',
  inputRef: function inputRef() {},
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: ''
};