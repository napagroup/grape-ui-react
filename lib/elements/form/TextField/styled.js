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
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlStylesTextField = function controlStylesTextField(props) {
  return !props.validationError ? (0, _styledHelpers.controlStyles)(props) : (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
    activeColor: 'brandDanger',
    borderColor: 'brandDanger'
  }));
};

var TextFieldComponent = exports.TextFieldComponent = (0, _styledComponents2["default"])(_component.TextInputComponent)(_templateObject(), _styledHelpers.controlColor, controlStylesTextField, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
TextFieldComponent.propTypes = _objectSpread({
  formStyle: _propTypes2["default"].string
}, _styledHelpers.control.propTypes, {}, _styledHelpers.typography.propTypes);
TextFieldComponent.defaultProps = _objectSpread({
  formStyle: ''
}, _styledHelpers.defaultControlStyles);
var propsToTrim = ['activeColor', 'assistiveText', 'controlId', 'labelText', 'validationError'].concat(_toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)));

var TextField = exports.TextField = function TextField(props) {
  var activeColor = props.activeColor,
      bg = props.bg,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      labelText = props.labelText,
      name = props.name,
      required = props.required,
      validationError = props.validationError,
      otherProps = _objectWithoutProperties(props, ["activeColor", "bg", "controlGroupProps", "controlId", "labelText", "name", "required", "validationError"]);

  var childProps = _objectSpread({
    bg: bg,
    id: controlId || name,
    labelText: labelText,
    name: name,
    required: required,
    validationError: validationError
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim));

  return _react2["default"].createElement(_ControlGroup.ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: (0, _AssistiveText.getAssistiveText)(props),
    bg: _styledHelpers.defaultControlStyles.bg,
    controlId: controlId,
    labelText: labelText,
    name: name,
    validationError: validationError
  }, controlGroupProps), _react2["default"].createElement(TextFieldComponent, childProps));
};

TextField.propTypes = _objectSpread({
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  bg: _propTypes2["default"].string,
  controlGroupProps: _propTypes2["default"].object,
  controlId: _propTypes2["default"].string,
  formStyle: _propTypes2["default"].string,
  labelText: _propTypes2["default"].string,
  name: _propTypes2["default"].string,
  required: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].string
}, _styledSystem.borderRadius.propTypes);
TextField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: null,
  controlGroupProps: {},
  controlId: '',
  formStyle: '',
  labelText: '',
  name: '',
  required: false,
  validationError: ''
};