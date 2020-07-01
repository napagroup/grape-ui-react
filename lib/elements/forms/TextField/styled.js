"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.TextField = exports.TextFieldComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../elements/forms/utils");

var _componentHelpers = require("../../../utils/componentHelpers");

var _styledHelpers = require("../../../utils/styledHelpers");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const controlStylesTextField = props => !props.validationError ? (0, _styledHelpers.controlStyles)(props) : (0, _styledHelpers.controlStyles)(_objectSpread({}, props, {
  activeColor: 'brandDanger',
  borderColor: 'brandDanger'
}));

const multilineStyles = props => props.multiline ? 'resize: none;' : '';

const TextFieldComponent = (0, _styledComponents.default)(_component.TextInputComponent)(_templateObject(), _styledHelpers.controlColor, controlStylesTextField, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, multilineStyles, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
exports.TextFieldComponent = TextFieldComponent;
TextFieldComponent.propTypes = _objectSpread({
  formStyle: _propTypes.default.string
}, _styledHelpers.control.propTypes, {}, _styledHelpers.typography.propTypes);
TextFieldComponent.defaultProps = _objectSpread({
  formStyle: ''
}, _styledHelpers.defaultControlStyles);
const propsToTrim = ['assistiveText', 'controlId', 'controlLabelProps', 'labelText', 'validationError', ...(0, _keys.default)(_styledHelpers.spaceProps.propTypes)];

const renderValueOrComponent = propsFromComponent => {
  const plainText = propsFromComponent.plainText;

  if (plainText) {
    const plainTextProps = (0, _componentHelpers.removeSomeProps)(propsFromComponent, _styledHelpers.plaintextPropsToTrim);
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  return /*#__PURE__*/_react.default.createElement(TextFieldComponent, propsFromComponent);
};

const TextField = props => {
  const activeColor = props.activeColor,
        assistiveTextProps = props.assistiveTextProps,
        bg = props.bg,
        controlGroupProps = props.controlGroupProps,
        controlId = props.controlId,
        controlLabelProps = props.controlLabelProps,
        formStyle = props.formStyle,
        isHidden = props.isHidden,
        isRequired = props.isRequired,
        labelText = props.labelText,
        name = props.name,
        validationError = props.validationError,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["activeColor", "assistiveTextProps", "bg", "controlGroupProps", "controlId", "controlLabelProps", "formStyle", "isHidden", "isRequired", "labelText", "name", "validationError"]);

  const childProps = _objectSpread({
    activeColor,
    bg,
    formStyle,
    id: controlId || name,
    isRequired,
    labelText,
    name,
    validationError
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim));

  const newlabel = !isRequired ? labelText : "".concat(labelText, "*");
  return /*#__PURE__*/_react.default.createElement(_utils.ControlGroup, (0, _extends2.default)({
    activeColor: activeColor,
    assistiveText: (0, _utils.getAssistiveText)(props),
    assistiveTextProps: assistiveTextProps,
    bg: _styledHelpers.defaultControlStyles.bg,
    controlId: controlId,
    controlLabelProps: controlLabelProps,
    isHidden: isHidden,
    labelText: newlabel,
    name: name,
    validationError: validationError
  }, controlGroupProps), renderValueOrComponent(_objectSpread({}, childProps)));
};

exports.TextField = TextField;
TextField.propTypes = _objectSpread({
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

  /** Hides component */
  isHidden: _propTypes.default.bool,

  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: _propTypes.default.bool,

  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: _propTypes.default.string,

  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: _propTypes.default.string,

  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: _propTypes.default.bool,

  /** Error text that will appear below the control when validation fires. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
}, _styledSystem.borderRadius.propTypes);
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
  isHidden: false,
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: ''
};