"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ControlGroupComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../../elements/forms/utils");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _context;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

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

  return /*#__PURE__*/_react["default"].createElement(_utils.ControlLabel, labelProps, text);
};

var renderAssistiveContent = function renderAssistiveContent(propsFromControlGroup) {
  var assistiveText = propsFromControlGroup.assistiveText,
      validationError = propsFromControlGroup.validationError;

  if (validationError.length > 0) {
    return validationError;
  }

  return assistiveText;
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
    return /*#__PURE__*/_react["default"].createElement(_utils.AssistiveText, (0, _extends2["default"])({
      id: "".concat(id, "Help")
    }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
  }

  return /*#__PURE__*/_react["default"].createElement(_utils.AssistiveText, (0, _extends2["default"])({
    color: "brandDanger",
    id: "".concat(id, "Error")
  }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
};

var propsToTrim = (0, _concat["default"])(_context = ['activeColor', 'assistiveText', 'assistiveTextProps', 'controlGroupProps', 'controlId', 'controlLabelProps', 'disabled', 'hideLabel', 'labelText', 'name', 'validationError']).call(_context, (0, _toConsumableArray2["default"])((0, _keys["default"])(_styledHelpers.spaceProps.propTypes)), (0, _toConsumableArray2["default"])((0, _keys["default"])(_styledHelpers.typography.propTypes)));

var ControlGroupComponent = function ControlGroupComponent(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
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
  return /*#__PURE__*/_react["default"].createElement("div", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), children, renderControlGroupLabel(labelProps), renderControlGroupAssistive(assistiveProps));
};

exports.ControlGroupComponent = ControlGroupComponent;
ControlGroupComponent.propTypes = _objectSpread({}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes, {
  activeColor: _propTypes["default"].string,
  assistiveText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  bg: _propTypes["default"].string,
  children: _propTypes["default"].any.isRequired,
  controlId: _propTypes["default"].string,
  controlLabelProps: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  hideLabel: _propTypes["default"].bool,
  labelText: _propTypes["default"].string,
  name: _propTypes["default"].string,
  validationError: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string])
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