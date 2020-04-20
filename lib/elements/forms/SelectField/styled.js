import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { ControlGroup, getAssistiveText, PlainText } from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, controlColor, controlStyles, defaultControlStyles, defaultStylesBase, disabledStyle, focusStyles, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, plaintextPropsToTrim, refType, spaceProps, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import styled from 'styled-components';
import { borderRadius, fontWeight } from 'styled-system';
import { SelectComponent } from './component';

var controlStylesSelectField = function controlStylesSelectField(props) {
  if (props.validationError) {
    return controlStyles(_objectSpread({}, props, {
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    }));
  }

  return controlStyles(props);
};

var focusStyleSelectField = function focusStyleSelectField(props) {
  if (props.isFocused) {
    return focusStyles(props);
  }

  return '';
};

var disabledStyleSelectField = function disabledStyleSelectField(props) {
  if (props.isDisabled) {
    return disabledStyle;
  }

  return '';
};

export var SelectFieldComponent = styled(SelectComponent)(_templateObject(), controlColor, fontFamilyCore, fontSizeCore, fontWeight, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, controlStylesSelectField, focusStyleSelectField, disabledStyleSelectField);
SelectFieldComponent.propTypes = _objectSpread({}, control.propTypes, {
  bg: PropTypes.string,
  formStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool
}, typography.propTypes, {
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
});
SelectFieldComponent.defaultProps = _objectSpread({}, defaultControlStyles, {}, defaultStylesBase, {
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
  return /*#__PURE__*/React.createElement(SelectFieldComponent, _extends({}, selectFieldProps, {
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
    var plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return /*#__PURE__*/React.createElement(PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId || name,
    isDisabled: disabled
  }, removeSomeProps(propsFromComponent, propsToTrim));

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
  return /*#__PURE__*/React.createElement(ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: getAssistiveText(assistiveProps),
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

SelectField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,

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

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,

  /** Allows for a ref to be defined to the DOM input.
   * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: refType,

  /** Should be used when the control is not meant to be required and is able to handle a null value.
   * @see See [React-Select/Select-Props](https://react-select.com/props#select-props) for more on this prop. */
  isClearable: PropTypes.bool,

  /** Using React-Select's `Creatable` control, this allows dropdowns to allow for custom values.
   * @see See [React-Select/Creatable](https://react-select.com/creatable) for more on this control. */
  isCreatable: PropTypes.bool,

  /** Allows for multiple options, each displayed as a chip. */
  isMulti: PropTypes.bool,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: PropTypes.string,

  /** Use this to overwrite the z-index manually. */
  menuZIndex: PropTypes.string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,

  /** Can be used to override specific styling on particular aspects of the control.
   * @see See [React-Select/Styles](https://react-select.com/styles) for a full list of style keys. */
  styleOverrides: PropTypes.object,

  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}, borderRadius.propTypes, {}, spaceProps.propTypes);
SelectField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
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

export { SelectField };