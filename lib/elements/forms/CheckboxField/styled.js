"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CheckboxField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    labelText,
    plainText,
    isRequired,
    validationError
  } = propsFromControlGroup;

  if (!labelText) {
    return null;
  }

  const labelCaption = !isRequired ? labelText : `${labelText}*`;
  const defaultPositionProps = {
    height: 'auto',
    position: 'relative',
    top: 'auto'
  };
  const positionProps = !plainText ? defaultPositionProps : '';
  const labelProps = {
    activeColor,
    bg,
    ...controlLabelProps,
    disabled,
    htmlFor: controlId,
    validationError,
    ...positionProps
  };
  return /*#__PURE__*/_react.default.createElement(_utils.ControlLabel, labelProps, labelCaption);
};

const propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'bg', 'controlGroupProps', 'controlId', 'controlLabelProps', 'isRequired', 'labelText', 'plainText', 'validationError'];
const plainTextPropsToTrim = ['flexDirection', 'name', 'onChange', 'options', 'wrapperProps', ...propsToTrim];

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    defaultValue,
    disabled,
    flexDirection,
    plainText,
    value
  } = propsFromComponent;

  if (plainText) {
    const plainTextProps = { ...(0, _componentHelpers.removeSomeProps)(propsFromComponent, plainTextPropsToTrim)
    };
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const childProps = {
    id: controlId,
    ...(0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim)
  };
  return /*#__PURE__*/_react.default.createElement(_component.CheckboxFieldComponent, (0, _extends2.default)({}, childProps, {
    disabled: disabled,
    flexDirection: flexDirection,
    value: value || defaultValue
  }));
};

const CheckboxField = props => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError
  } = props;
  const additionalControlGroupProps = { ...controlGroupProps,
    controlId
  };
  const labelProps = {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError
  };
  const assistiveProps = {
    assistiveText,
    isRequired
  };
  return /*#__PURE__*/_react.default.createElement(_utils.ControlGroup, (0, _extends2.default)({}, additionalControlGroupProps, {
    assistiveText: (0, _utils.getAssistiveText)(assistiveProps),
    assistiveTextProps: assistiveTextProps,
    validationError: validationError
  }), renderControlGroupLabel(labelProps), renderValueOrComponent({ ...props,
    plainText
  }));
};

exports.CheckboxField = CheckboxField;
CheckboxField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: _propTypes.default.string,

  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: _propTypes.default.object,
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
  flexDirection: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  fontFamily: _propTypes.default.string,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes.default.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes.default.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes.default.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /** Allows for custom props to be passed down to the `CheckboxGroupWrapper` component. */
  wrapperProps: _propTypes.default.object
};
CheckboxField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: _styledHelpers.defaultControlStyles.bg,
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