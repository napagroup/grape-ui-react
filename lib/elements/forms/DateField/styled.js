import "core-js/modules/es.date.to-string";
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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  width: 100%;\n  &&& {\n    .DayPickerInput {\n      box-sizing: border-box;\n      width: 100%;\n    }\n  }\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    &:focus-within { ", " };\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { borderRadius, fontWeight } from 'styled-system';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, controlColor, controlStyles, defaultControlStyles, disabledStyle, focusStyles, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, plaintextPropsToTrim, refType, spaceProps, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { ControlGroup, getAssistiveText, PlainText } from 'src/elements/forms/utils';
import { DateFieldComponent } from './component';
import { DayPickerControlStyles, DEFAULT_DATE_FORMAT, DEFAULT_DATE_VALUE_FORMAT } from './constants';
import { defaultControlColorProps, defaultDayPickerProps, propsToTrim, styledWrapperPropsToTrim } from './props';
import { menuStyledHelper } from './styledHelpers';

var controlStylesDateField = function controlStylesDateField(props) {
  if (props.validationError) {
    return controlStyles(_objectSpread({}, props, {
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    }));
  }

  return controlStyles(props);
};

var disabledStyleDateField = function disabledStyleDateField(props) {
  if (props.isDisabled) {
    return disabledStyle;
  }

  return '';
};

var getControlStyles = function getControlStyles(props) {
  if (props.calendarOnly) {
    return "\n    background: transparent;\n    margin-top: 1rem;\n    + label {\n      position: absolute;\n      top: 0;\n    }\n  ";
  }

  return css(_templateObject(), controlStylesDateField, disabledStyleDateField, focusStyles);
};

var StyledWrapper = styled('div')(_templateObject2(), controlColor, fontFamilyCore, fontSizeCore, fontWeight, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, DayPickerControlStyles, getControlStyles, menuStyledHelper);
StyledWrapper.propTypes = {
  bg: PropTypes.string,
  calendarOnly: PropTypes.bool,
  formStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
StyledWrapper.defaultProps = {
  bg: null,
  calendarOnly: false,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: ''
};

var renderDateFieldComponent = function renderDateFieldComponent(dateFieldProps) {
  var bg = dateFieldProps.bg,
      disabled = dateFieldProps.disabled,
      format = dateFieldProps.format,
      formStyle = dateFieldProps.formStyle,
      inputProps = dateFieldProps.inputProps,
      inputRef = dateFieldProps.inputRef,
      labelText = dateFieldProps.labelText,
      placeholder = dateFieldProps.placeholder,
      validationError = dateFieldProps.validationError;

  var controlProps = _objectSpread({}, inputProps, {
    disabled: disabled,
    ref: inputRef
  });

  var stylingProps = _objectSpread({
    bg: bg,
    formStyle: formStyle,
    labelText: labelText,
    validationError: validationError
  }, removeSomeProps(dateFieldProps, styledWrapperPropsToTrim));

  return /*#__PURE__*/React.createElement(StyledWrapper, stylingProps, /*#__PURE__*/React.createElement(DateFieldComponent, _extends({}, dateFieldProps, {
    inputProps: controlProps,
    placeholder: placeholder || format
  })));
};

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

  return renderDateFieldComponent(childProps);
};

var DateField = function DateField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      assistiveTextProps = props.assistiveTextProps,
      bg = props.bg,
      controlColorProps = props.controlColorProps,
      controlGroupProps = props.controlGroupProps,
      controlId = props.controlId,
      controlLabelProps = props.controlLabelProps,
      dayPickerProps = props.dayPickerProps,
      disabled = props.disabled,
      isRequired = props.isRequired,
      labelText = props.labelText,
      locale = props.locale,
      name = props.name,
      validationError = props.validationError;
  var assistiveProps = {
    assistiveText: assistiveText,
    isRequired: isRequired
  };
  var newLabel = isRequired && labelText ? "".concat(labelText, "*") : labelText;

  var newControlColorProps = _objectSpread({}, defaultControlColorProps, {}, controlColorProps);

  var newDayPickerProps = _objectSpread({}, defaultDayPickerProps, {
    weekdaysShort: locale !== 'en' ? '' : defaultDayPickerProps.weekdaysShort
  }, dayPickerProps);

  var componentProps = _objectSpread({}, props, {
    controlColorProps: newControlColorProps,
    dayPickerProps: newDayPickerProps
  });

  return /*#__PURE__*/React.createElement(ControlGroup, _extends({
    activeColor: activeColor,
    assistiveText: getAssistiveText(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    labelText: newLabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, componentProps)));
};

DateField.propTypes = _objectSpread({
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /** Allows for custom props to be passed down to the `AssistiveText` component. */
  assistiveTextProps: PropTypes.object,

  /** Binds the DayPicker with an input field, displaying the calendar in an overlay by default. Selecting calendarOnly
   * shows the full calendar inline.
   * @see [react-day-picker/Input Field](https://react-day-picker.js.org/examples/input) */
  calendarOnly: PropTypes.bool,

  /** Define the colors for the control.  Uses grape-ui's color variables.  Important note, if a value is not provided explicitly for a specific color, it will fallback to the default color. */
  controlColorProps: PropTypes.object,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: PropTypes.object,

  /** Define the height of the component.  Useful for definining the menu placement offset. */
  controlHeight: PropTypes.string,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
   */
  controlId: PropTypes.string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: PropTypes.object,

  /** The DayPicker props to customize the calendar rendered in the overlay.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPicker/) for more */
  dayPickerProps: PropTypes.object,

  /** Basic HTML attribute, needed for styling. */
  disabled: PropTypes.bool,

  /** Date format that is acceptable for user to enter, as well as the format of the value that is returned upon selection. Defaults to M/D/YYYY.
   * @see See [Moment.js | Docs > Parsing > String + Format](https://momentjs.com/docs/#/parsing/string-format/) for more format options */
  format: PropTypes.string,

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,

  /** Additional props to add to the input component. The value key is ignored: use the value prop instead.
   * @see See [React-Day-Picker DayPicker API](https://react-day-picker.js.org/api/DayPickerInput#inputProps) for more */
  inputProps: PropTypes.object,

  /** Allows for a ref to be defined to the DOM input */
  inputRef: refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,

  /** Locale defaults to English (en) */
  locale: PropTypes.string,

  /** Define where to align the dropdown menu.
   * Please use either `left` or `right`.
   * Uses styled-system's responsive styling to specify via specic breakpoints. */
  menuAlignment: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

  /** Define the flex-direction of the menu.  Uses styled-system's responsive styling.  Should only be used for menus that have more than one month. */
  menuDirection: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

  /** Override `menuDirection`'s specific breakpoints for when to use column/row view.
   * Please use `column` or `row`.
   * Enter a value for `maxWidth` for `column`.
   * Enter a value for `minWidth` for `row`.
   * Should only be used for menus that have more than one month. */
  menuDirectionViewportBreakpoint: PropTypes.object,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: PropTypes.string,

  /** Defines the bottom CSS property of the menu's overlay */
  menuOverlayBottom: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),

  /** Defines the left CSS property of the menu's overlay */
  menuOverlayLeft: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),

  /** Defines the right CSS property of the menu's overlay */
  menuOverlayRight: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),

  /** Defines the top CSS property of the menu's overlay */
  menuOverlayTop: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),

  /** Defines the placement of the dropdown menu */
  menuPlacement: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** The value of the input field.  It can either be a string or a Date object.
   * @see See [React-Day-Picker API](https://react-day-picker.js.org/api/DayPickerInput#value) for more about the prop.
   * @see See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for more about Date objects.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /** Define the format for the value sent to the database.  Default value is "YYYY-MM-DD".
   * When user call OnChange, onChange function is expected to be called with 4 parameters: selectedDay, modifiers, input, formattedDay
   * selectedDay: the date object of the selected date
   * modifiers: matching day for the given modifiers
   * input: the inner input which you get the the input.value
   * formattedDay: string format output that using the valueFormat
   */
  valueFormat: PropTypes.any
}, borderRadius.propTypes, {}, spaceProps.propTypes, {}, control.propTypes, {}, typography.propTypes);
DateField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  calendarOnly: false,
  controlColorProps: defaultControlColorProps,
  controlGroupProps: {},
  controlHeight: '58px',
  controlId: '',
  controlLabelProps: {},
  dayPickerProps: defaultDayPickerProps,
  disabled: false,
  format: DEFAULT_DATE_FORMAT,
  formStyle: '',
  inputProps: {},
  inputRef: function inputRef() {},
  isRequired: false,
  labelText: '',
  locale: 'en',
  menuAlignment: 'left',
  menuDirection: 'column',
  menuDirectionViewportBreakpoint: {},
  menuElevation: '01',
  menuOverlayBottom: '',
  menuOverlayLeft: '',
  menuOverlayRight: '',
  menuOverlayTop: '',
  menuPlacement: 'bottom',
  name: '',
  plainText: false,
  validationError: '',
  value: undefined,
  valueFormat: DEFAULT_DATE_VALUE_FORMAT
};
/** @component */

export { DateField };