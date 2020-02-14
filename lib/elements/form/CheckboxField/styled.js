"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../../elements/form/utils");

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

  return _react2["default"].createElement(_utils.ControlLabel, labelProps, labelCaption);
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

    return _react2["default"].createElement(_utils.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));

  return _react2["default"].createElement(_component.CheckboxFieldComponent, _extends({}, childProps, {
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
  return _react2["default"].createElement(_utils.ControlGroup, _extends({}, additionalControlGroupProps, {
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    validationError: validationError
  }), renderControlGroupLabel(labelProps), renderValueOrComponent(_objectSpread({}, props, {
    plainText: plainText
  })));
};

CheckboxField.propTypes = {
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  assistiveTextProps: _propTypes2["default"].object,
  bg: _propTypes2["default"].string,
  controlGroupProps: _propTypes2["default"].object,
  controlId: _propTypes2["default"].string,
  controlLabelProps: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  flexDirection: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].array]),
  fontFamily: _propTypes2["default"].string,
  isRequired: _propTypes2["default"].bool,
  labelText: _propTypes2["default"].string,
  plainText: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].string]),
  wrapperProps: _propTypes2["default"].object
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

exports.CheckboxField = CheckboxField;