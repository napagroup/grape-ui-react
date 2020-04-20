import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroup, ControlLabel, getAssistiveText, PlainText } from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultControlStyles } from 'src/utils/styledHelpers';
import { CheckboxFieldComponent } from './component';

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

  return /*#__PURE__*/React.createElement(ControlLabel, labelProps, labelCaption);
};

var propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'bg', 'controlGroupProps', 'controlId', 'controlLabelProps', 'isRequired', 'labelText', 'plainText', 'validationError'];

var plainTextPropsToTrim = _concatInstanceProperty(_context = ['flexDirection', 'name', 'onChange', 'options', 'wrapperProps']).call(_context, propsToTrim);

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      defaultValue = propsFromComponent.defaultValue,
      disabled = propsFromComponent.disabled,
      flexDirection = propsFromComponent.flexDirection,
      plainText = propsFromComponent.plainText,
      value = propsFromComponent.value;

  if (plainText) {
    var plainTextProps = _objectSpread({}, removeSomeProps(propsFromComponent, plainTextPropsToTrim));

    return /*#__PURE__*/React.createElement(PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId
  }, removeSomeProps(propsFromComponent, propsToTrim));

  return /*#__PURE__*/React.createElement(CheckboxFieldComponent, _extends({}, childProps, {
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
  return /*#__PURE__*/React.createElement(ControlGroup, _extends({}, additionalControlGroupProps, {
    assistiveText: getAssistiveText(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    validationError: validationError
  }), renderControlGroupLabel(labelProps), renderValueOrComponent(_objectSpread({}, props, {
    plainText: plainText
  })));
};

CheckboxField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,
  bg: PropTypes.string,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: PropTypes.object,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
  */
  controlId: PropTypes.string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: PropTypes.object,

  /** Basic HTML attribute, needed for styling. */
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontFamily: PropTypes.string,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** Allows for custom props to be passed down to the `CheckboxGroupWrapper` component. */
  wrapperProps: PropTypes.object
};
CheckboxField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: defaultControlStyles.bg,
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

export { CheckboxField };