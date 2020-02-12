"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroupComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../../../../elements/form/utils");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var renderControlGroupLabel = function renderControlGroupLabel(propsFromControlGroup) {
  var activeColor = propsFromControlGroup.activeColor,
      bgColorFromProps = propsFromControlGroup.bg,
      disabled = propsFromControlGroup.disabled,
      controlId = propsFromControlGroup.controlId,
      controlLabelProps = propsFromControlGroup.controlLabelProps,
      hideLabel = propsFromControlGroup.hideLabel,
      text = propsFromControlGroup.text,
      validationError = propsFromControlGroup.validationError;

  if (!text || hideLabel) {
    return null;
  }

  var labelProps = _objectSpread({
    activeColor: activeColor,
    bg: bgColorFromProps
  }, controlLabelProps, {
    disabled: disabled,
    htmlFor: controlId,
    validationError: validationError
  });

  return _react2["default"].createElement(_utils.ControlLabel, labelProps, text);
};

var renderControlGroupAssistive = function renderControlGroupAssistive(propsFromControlGroup) {
  var assistiveText = propsFromControlGroup.assistiveText,
      assistiveTextProps = propsFromControlGroup.assistiveTextProps,
      id = propsFromControlGroup.controlId,
      error = propsFromControlGroup.validationError;

  if (!assistiveText && !error) {
    return null;
  }

  if (assistiveText && !error) {
    return _react2["default"].createElement(_utils.AssistiveText, _extends({
      id: "".concat(id, "Help")
    }, assistiveTextProps), assistiveText);
  }

  return _react2["default"].createElement(_utils.AssistiveText, _extends({
    color: "brandDanger",
    id: "".concat(id, "Error")
  }, assistiveTextProps), error);
};

var propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'controlGroupProps', 'controlId', 'controlLabelProps', 'disabled', 'hideLabel', 'labelText', 'name', 'validationError'].concat(_toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var ControlGroupComponent = exports.ControlGroupComponent = function ControlGroupComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      assistiveTextProps = props.assistiveTextProps,
      bgColorFromProps = props.bg,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      disabled = props.disabled,
      hideLabel = props.hideLabel,
      labelText = props.labelText,
      name = props.name,
      validationError = props.validationError;
  var nextControlId = controlId || name;
  var labelProps = {
    activeColor: activeColor,
    bg: bgColorFromProps,
    controlId: nextControlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    hideLabel: hideLabel,
    text: labelText,
    validationError: validationError
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    assistiveTextProps: assistiveTextProps,
    controlId: nextControlId,
    validationError: validationError
  };
  return _react2["default"].createElement("div", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), children, renderControlGroupLabel(labelProps), renderControlGroupAssistive(assistiveProps));
};

ControlGroupComponent.propTypes = _objectSpread({}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes, {
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  bg: _propTypes2["default"].string,
  children: _propTypes2["default"].any.isRequired,
  controlId: _propTypes2["default"].string,
  controlLabelProps: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  hideLabel: _propTypes2["default"].bool,
  labelText: _propTypes2["default"].string,
  name: _propTypes2["default"].string,
  validationError: _propTypes2["default"].string
});
ControlGroupComponent.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  hideLabel: false,
  labelText: '',
  name: '',
  validationError: ''
};