"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlLabel = require("../../../elements/form/ControlLabel");

var _ControlGroup = require("../../../elements/form/ControlGroup");

var _componentHelpers = require("../../../utils/componentHelpers");

var _PlainText = require("../../../elements/form/PlainText");

var _styledHelpers = require("../../../utils/styledHelpers");

var _AssistiveText = require("../../../elements/form/AssistiveText");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderControlGroupLabel = function renderControlGroupLabel(propsFromControlGroup) {
  var activeColor = propsFromControlGroup.activeColor,
      bg = propsFromControlGroup.bg,
      controlId = propsFromControlGroup.controlId,
      disabled = propsFromControlGroup.disabled,
      labelText = propsFromControlGroup.labelText,
      plainText = propsFromControlGroup.plainText,
      required = propsFromControlGroup.required,
      validationError = propsFromControlGroup.validationError;

  if (!labelText) {
    return null;
  }

  var labelProps = {
    activeColor: activeColor,
    bg: bg,
    disabled: disabled,
    htmlFor: controlId,
    validationError: validationError
  };
  var labelCaption = !required ? labelText : "".concat(labelText, "*");
  return _react2["default"].createElement(_ControlLabel.ControlLabel, _extends({
    isRelative: !plainText
  }, labelProps), labelCaption);
};

var propsToTrim = ['activeColor', 'assistiveText', 'bg', 'controlGroupProps', 'controlId', 'labelText', 'plainText', 'validationError', 'required'];

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      defaultValue = propsFromComponent.defaultValue,
      disabled = propsFromComponent.disabled,
      flexDirection = propsFromComponent.flexDirection,
      plainText = propsFromComponent.plainText,
      value = propsFromComponent.value;

  if (plainText) {
    var plainTextProps = _objectSpread({}, (0, _componentHelpers.removeSomeProps)(propsFromComponent, ['controlGroupProps', 'controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection', 'assistiveText', 'validationError', 'required', 'wrapperProps']));

    return _react2["default"].createElement(_PlainText.PlainText, plainTextProps);
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

var CheckboxField = exports.CheckboxField = function CheckboxField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      bg = props.bg,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      disabled = props.disabled,
      labelText = props.labelText,
      plainText = props.plainText,
      required = props.required,
      validationError = props.validationError;
  var additionalControlGroupProps = {
    controlGroupProps: controlGroupProps,
    controlId: controlId
  };
  var labelProps = {
    activeColor: activeColor,
    bg: bg,
    controlId: controlId,
    disabled: disabled,
    labelText: labelText,
    required: required,
    validationError: validationError
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    required: required
  };
  return _react2["default"].createElement(_ControlGroup.ControlGroup, _extends({}, additionalControlGroupProps, {
    assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
    validationError: validationError
  }), renderControlGroupLabel(labelProps), renderValueOrComponent(_objectSpread({}, props, {
    plainText: plainText
  })));
};

CheckboxField.propTypes = {
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  bg: _propTypes2["default"].string,
  controlGroupProps: _propTypes2["default"].object,
  controlId: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool,
  flexDirection: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].array]),
  fontFamily: _propTypes2["default"].string,
  labelText: _propTypes2["default"].string,
  plainText: _propTypes2["default"].bool,
  required: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].string,
  wrapperProps: _propTypes2["default"].object
};
CheckboxField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  controlGroupProps: {},
  controlId: '',
  disabled: false,
  flexDirection: 'column',
  fontFamily: 'base',
  labelText: '',
  plainText: false,
  required: false,
  validationError: '',
  wrapperProps: {}
};