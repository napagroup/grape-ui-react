import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { AssistiveText, ControlLabel } from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultControlStyles, spaceProps, typography } from 'src/utils/styledHelpers';

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

  return /*#__PURE__*/React.createElement(ControlLabel, labelProps, text);
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
    return /*#__PURE__*/React.createElement(AssistiveText, _extends({
      id: "".concat(id, "Help")
    }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
  }

  return /*#__PURE__*/React.createElement(AssistiveText, _extends({
    color: "brandDanger",
    id: "".concat(id, "Error")
  }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
};

var propsToTrim = _concatInstanceProperty(_context = ['activeColor', 'assistiveText', 'assistiveTextProps', 'controlGroupProps', 'controlId', 'controlLabelProps', 'disabled', 'hideLabel', 'labelText', 'name', 'validationError']).call(_context, _toConsumableArray(_Object$keys(spaceProps.propTypes)), _toConsumableArray(_Object$keys(typography.propTypes)));

export var ControlGroupComponent = function ControlGroupComponent(_ref) {
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
  return /*#__PURE__*/React.createElement("div", removeSomeProps(props, propsToTrim), children, renderControlGroupLabel(labelProps), renderControlGroupAssistive(assistiveProps));
};
ControlGroupComponent.propTypes = _objectSpread({}, spaceProps.propTypes, {}, typography.propTypes, {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  bg: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string,
  controlLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});
ControlGroupComponent.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  hideLabel: false,
  labelText: '',
  name: '',
  validationError: ''
};