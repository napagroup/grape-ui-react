"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderControlGroupLabel = function renderControlGroupLabel(propsFromControlGroup) {
  var activeColor = propsFromControlGroup.activeColor,
      bg = propsFromControlGroup.bg,
      controlId = propsFromControlGroup.controlId,
      controlLabelProps = propsFromControlGroup.controlLabelProps,
      disabled = propsFromControlGroup.disabled,
      labelText = propsFromControlGroup.labelText,
      plainText = propsFromControlGroup.plainText,
      isRequired = propsFromControlGroup.isRequired,
      validationError = propsFromControlGroup.validationError;

  if (!labelText) {
    return null;
  }

  var labelCaption = !isRequired ? labelText : "".concat(labelText, "*");
  var defaultPositionProps = {
    height: 'auto',
    position: 'relative',
    top: 'auto'
  };
  var positionProps = !plainText ? defaultPositionProps : '';

  var labelProps = _objectSpread({
    activeColor: activeColor,
    bg: bg
  }, controlLabelProps, {
    disabled: disabled,
    htmlFor: controlId,
    validationError: validationError
  }, positionProps);

  return /*#__PURE__*/_react["default"].createElement(_utils.ControlLabel, labelProps, labelCaption);
};

var propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'bg', 'controlGroupProps', 'controlId', 'controlLabelProps', 'isRequired', 'labelText', 'plainText', 'validationError'];
var plainTextPropsToTrim = ['flexDirection', 'name', 'onChange', 'options', 'wrapperProps'].concat(propsToTrim);

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      defaultValue = propsFromComponent.defaultValue,
      disabled = propsFromComponent.disabled,
      flexDirection = propsFromComponent.flexDirection,
      plainText = propsFromComponent.plainText,
      value = propsFromComponent.value;

  if (plainText) {
    var plainTextProps = _objectSpread({}, (0, _componentHelpers.removeSomeProps)(propsFromComponent, plainTextPropsToTrim));

    return /*#__PURE__*/_react["default"].createElement(_utils.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));

  return /*#__PURE__*/_react["default"].createElement(_component.CheckboxFieldComponent, _extends({}, childProps, {
    disabled: disabled,
    flexDirection: flexDirection,
    value: value || defaultValue
  }));
};

var CheckboxField = function CheckboxField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      assistiveTextProps = props.assistiveTextProps,
      bg = props.bg,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      disabled = props.disabled,
      isRequired = props.isRequired,
      labelText = props.labelText,
      plainText = props.plainText,
      validationError = props.validationError;

  var additionalControlGroupProps = _objectSpread({}, controlGroupProps, {
    controlId: controlId
  });

  var labelProps = {
    activeColor: activeColor,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    isRequired: isRequired,
    labelText: labelText,
    plainText: plainText,
    validationError: validationError
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    isRequired: isRequired
  };
  return /*#__PURE__*/_react["default"].createElement(_utils.ControlGroup, _extends({}, additionalControlGroupProps, {
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    validationError: validationError
  }), renderControlGroupLabel(labelProps), renderValueOrComponent(_objectSpread({}, props, {
    plainText: plainText
  })));
};

exports.CheckboxField = CheckboxField;
CheckboxField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes["default"].string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes["default"].object,
  bg: _propTypes["default"].string,

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
  flexDirection: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  fontFamily: _propTypes["default"].string,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes["default"].bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes["default"].string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes["default"].bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),

  /** Allows for custom props to be passed down to the `CheckboxGroupWrapper` component. */
  wrapperProps: _propTypes["default"].object
};
CheckboxField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: _styledHelpers.defaultControlStyles.bg,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  flexDirection: 'column',
  fontFamily: 'base',
  isRequired: false,
  labelText: '',
  plainText: false,
  validationError: '',
  wrapperProps: {}
};
/** @component */