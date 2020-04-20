import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _context;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import { ControlGroup, getAssistiveText, PlainText } from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, controlColor, controlStyles, defaultControlStyles, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, plaintextPropsToTrim, refType, spaceProps, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import styled from 'styled-components';
import { borderRadius, fontWeight } from 'styled-system';
import { TextInputComponent } from './component';

var controlStylesTextField = function controlStylesTextField(props) {
  return !props.validationError ? controlStyles(props) : controlStyles(_objectSpread({}, props, {
    activeColor: 'brandDanger',
    borderColor: 'brandDanger'
  }));
};

var multilineStyles = function multilineStyles(props) {
  return props.multiline ? 'resize: none;' : '';
};

export var TextFieldComponent = styled(TextInputComponent)(_templateObject(), controlColor, controlStylesTextField, fontFamilyCore, fontSizeCore, fontStyleCore, fontWeight, letterSpacingCore, lineHeightCore, multilineStyles, textAlignCore, textDecorationCore);
TextFieldComponent.propTypes = _objectSpread({
  formStyle: PropTypes.string
}, control.propTypes, {}, typography.propTypes);
TextFieldComponent.defaultProps = _objectSpread({
  formStyle: ''
}, defaultControlStyles);

var propsToTrim = _concatInstanceProperty(_context = ['assistiveText', 'controlId', 'controlLabelProps', 'labelText', 'validationError']).call(_context, _toConsumableArray(_Object$keys(spaceProps.propTypes)));

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var plainText = propsFromComponent.plainText;

  if (plainText) {
    var plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return /*#__PURE__*/React.createElement(PlainText, plainTextProps);
  }

  return /*#__PURE__*/React.createElement(TextFieldComponent, propsFromComponent);
};

export var TextField = function TextField(props) {
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
  }, removeSomeProps(otherProps, propsToTrim));

  var newlabel = !isRequired ? labelText : "".concat(labelText, "*");
  return /*#__PURE__*/React.createElement(ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: getAssistiveText(props),
    assistiveTextProps: assistiveTextProps,
    bg: defaultControlStyles.bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, childProps)));
};
TextField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,

  /** Defines the background color for the control. */
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

  /** Allows for custom font family to be passed down to the control. */
  fontFamily: PropTypes.string,

  /**
  * Use 'filled' or 'outlined'
  * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,

  /** Allows for a ref to be defined to the DOM input.
  * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}, borderRadius.propTypes);
TextField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: null,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  fontFamily: defaultControlStyles.fontFamily,
  formStyle: '',
  inputRef: function inputRef() {},
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: ''
};