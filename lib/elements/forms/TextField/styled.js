"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.TextField = exports.TextFieldComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

const controlStylesTextField = props => !props.validationError ? (0, _styledHelpers.controlStyles)(props) : (0, _styledHelpers.controlStyles)({ ...props,
  activeColor: 'brandDanger',
  borderColor: 'brandDanger'
});

const multilineStyles = props => props.multiline ? 'resize: none;' : '';

const TextFieldComponent = (0, _styledComponents.default)(_component.TextInputComponent)`
  ${_styledHelpers.controlColor}
  ${controlStylesTextField}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${multilineStyles}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
`;
exports.TextFieldComponent = TextFieldComponent;
TextFieldComponent.propTypes = {
  formStyle: _propTypes.default.string,
  ..._styledHelpers.control.propTypes,
  ..._styledHelpers.typography.propTypes
};
TextFieldComponent.defaultProps = {
  formStyle: '',
  ..._styledHelpers.defaultControlStyles
};
const propsToTrim = ['assistiveText', 'controlId', 'controlLabelProps', 'labelText', 'validationError', ...(0, _keys.default)(_styledHelpers.spaceProps.propTypes)];

const renderValueOrComponent = propsFromComponent => {
  const {
    plainText
  } = propsFromComponent;

  if (plainText) {
    const plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  return /*#__PURE__*/_react.default.createElement(TextFieldComponent, propsFromComponent);
};

const TextField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    formStyle,
    isRequired,
    labelText,
    name,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    activeColor,
    bg,
    formStyle,
    id: controlId || name,
    isRequired,
    labelText,
    name,
    validationError,
    ...(0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim)
  };
  const newlabel = !isRequired ? labelText : `${labelText}*`;
  return /*#__PURE__*/_react.default.createElement(_utils.ControlGroup, (0, _extends2.default)({
    activeColor: activeColor,
    assistiveText: (0, _utils.getAssistiveText)(props),
    assistiveTextProps: assistiveTextProps,
    bg: _styledHelpers.defaultControlStyles.bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent({ ...childProps
  }));
};

exports.TextField = TextField;
TextField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes.default.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes.default.object,

  /** Defines the background color for the control. */
  bg: _propTypes.default.string,

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

  /** Allows for custom font family to be passed down to the control. */
  fontFamily: _propTypes.default.string,

  /**
  * Use 'filled' or 'outlined'
  * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: _propTypes.default.string,

  /** Allows for a ref to be defined to the DOM input.
  * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: _styledHelpers.refType,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes.default.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes.default.string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes.default.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes.default.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  ..._styledSystem.borderRadius.propTypes
};
TextField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: null,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  fontFamily: _styledHelpers.defaultControlStyles.fontFamily,
  formStyle: '',
  inputRef: () => {},
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: ''
};