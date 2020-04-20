"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SelectField = exports.SelectFieldComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

const controlStylesSelectField = props => {
  if (props.validationError) {
    return (0, _styledHelpers.controlStyles)({ ...props,
      activeColor: 'brandDanger',
      borderColor: 'brandDanger'
    });
  }

  return (0, _styledHelpers.controlStyles)(props);
};

const focusStyleSelectField = props => {
  if (props.isFocused) {
    return (0, _styledHelpers.focusStyles)(props);
  }

  return '';
};

const disabledStyleSelectField = props => {
  if (props.isDisabled) {
    return _styledHelpers.disabledStyle;
  }

  return '';
};

const SelectFieldComponent = (0, _styledComponents.default)(_component.SelectComponent)`
  ${_styledHelpers.controlColor}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${controlStylesSelectField}
  ${focusStyleSelectField}
  ${disabledStyleSelectField}
`;
exports.SelectFieldComponent = SelectFieldComponent;
SelectFieldComponent.propTypes = { ..._styledHelpers.control.propTypes,
  bg: _propTypes.default.string,
  formStyle: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isFocused: _propTypes.default.bool,
  menuSelectedBg: _propTypes.default.string,
  menuSelectedColor: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  ..._styledHelpers.typography.propTypes,
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
SelectFieldComponent.defaultProps = { ..._styledHelpers.defaultControlStyles,
  ..._styledHelpers.defaultStylesBase,
  bg: null,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: ''
};

const renderSelectFieldComponent = selectFieldProps => {
  const {
    defaultValue,
    value
  } = selectFieldProps;
  return /*#__PURE__*/_react.default.createElement(SelectFieldComponent, (0, _extends2.default)({}, selectFieldProps, {
    value: value || defaultValue
  }));
};

const propsToTrim = ['assistiveText', 'controlGroupProps', 'controlId', 'disabled', 'isRequired', 'plainText'];

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    name,
    plainText
  } = propsFromComponent;

  if (plainText) {
    const plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const childProps = {
    id: controlId || name,
    isDisabled: disabled,
    ...(0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim)
  };
  return renderSelectFieldComponent(childProps);
};

const SelectField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    assistiveText,
    isRequired,
    labelText,
    name,
    validationError
  } = props;
  const assistiveProps = {
    assistiveText,
    isRequired
  };
  const newlabel = isRequired && labelText ? `${labelText}*` : labelText;
  return /*#__PURE__*/_react.default.createElement(_utils.ControlGroup, (0, _extends2.default)({
    activeColor: activeColor,
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    bg: bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    disabled: disabled,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent({ ...props
  }));
};

exports.SelectField = SelectField;
SelectField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes.default.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes.default.object,

  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: _propTypes.default.object,

  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
  */
  controlId: _propTypes.default.string,

  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: _propTypes.default.object,

  /** Basic HTML attribute, needed for styling. */
  disabled: _propTypes.default.bool,

  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes.default.string,

  /** Allows for a ref to be defined to the DOM input.
   * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: _styledHelpers.refType,

  /** Should be used when the control is not meant to be required and is able to handle a null value.
   * @see See [React-Select/Select-Props](https://react-select.com/props#select-props) for more on this prop. */
  isClearable: _propTypes.default.bool,

  /** Using React-Select's `Creatable` control, this allows dropdowns to allow for custom values.
   * @see See [React-Select/Creatable](https://react-select.com/creatable) for more on this control. */
  isCreatable: _propTypes.default.bool,

  /** Allows for multiple options, each displayed as a chip. */
  isMulti: _propTypes.default.bool,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes.default.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes.default.string,

  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: _propTypes.default.string,

  /** Use this to overwrite the z-index manually. */
  menuZIndex: _propTypes.default.string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes.default.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes.default.bool,

  /** Can be used to override specific styling on particular aspects of the control.
   * @see See [React-Select/Styles](https://react-select.com/styles) for a full list of style keys. */
  styleOverrides: _propTypes.default.object,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  ..._styledSystem.borderRadius.propTypes,
  ..._styledHelpers.spaceProps.propTypes
};
SelectField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  formStyle: '',
  inputRef: () => {},
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