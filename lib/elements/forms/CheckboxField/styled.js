"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CheckboxField = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const renderControlGroupLabel = propsFromControlGroup => {
  const activeColor = propsFromControlGroup.activeColor,
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

  const labelCaption = !isRequired ? labelText : "".concat(labelText, "*");
  const defaultPositionProps = {
    height: 'auto',
    position: 'relative',
    top: 'auto'
  };
  const positionProps = !plainText ? defaultPositionProps : '';

  const labelProps = _objectSpread({
    activeColor,
    bg
  }, controlLabelProps, {
    disabled,
    htmlFor: controlId,
    validationError
  }, positionProps);

  return /*#__PURE__*/_react.default.createElement(_utils.ControlLabel, labelProps, labelCaption);
};

const propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'bg', 'controlGroupProps', 'controlId', 'controlLabelProps', 'isRequired', 'labelText', 'plainText', 'validationError'];
const plainTextPropsToTrim = ['flexDirection', 'name', 'onChange', 'options', 'wrapperProps', ...propsToTrim];

const renderValueOrComponent = propsFromComponent => {
  const controlId = propsFromComponent.controlId,
        defaultValue = propsFromComponent.defaultValue,
        disabled = propsFromComponent.disabled,
        flexDirection = propsFromComponent.flexDirection,
        plainText = propsFromComponent.plainText,
        value = propsFromComponent.value;

  if (plainText) {
    const plainTextProps = _objectSpread({}, (0, _componentHelpers.removeSomeProps)(propsFromComponent, plainTextPropsToTrim));

    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const childProps = _objectSpread({
    id: controlId
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));

  return /*#__PURE__*/_react.default.createElement(_component.CheckboxFieldComponent, (0, _extends2.default)({}, childProps, {
    disabled: disabled,
    flexDirection: flexDirection,
    value: value || defaultValue
  }));
};

const CheckboxField = props => {
  const activeColor = props.activeColor,
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

  const additionalControlGroupProps = _objectSpread({}, controlGroupProps, {
    controlId
  });

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
  }), renderControlGroupLabel(labelProps), renderValueOrComponent(_objectSpread({}, props, {
    plainText
  })));
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