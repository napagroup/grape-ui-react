"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ControlGroupComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../../elements/forms/utils");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    activeColor,
    bg: bgColorFromProps,
    disabled,
    controlId,
    controlLabelProps,
    hideLabel,
    text,
    validationError
  } = propsFromControlGroup;

  if (!text || hideLabel) {
    return null;
  }

  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
    ...controlLabelProps,
    disabled,
    htmlFor: controlId,
    validationError
  };
  return /*#__PURE__*/_react.default.createElement(_utils.ControlLabel, labelProps, text);
};

const renderAssistiveContent = propsFromControlGroup => {
  const {
    assistiveText,
    validationError
  } = propsFromControlGroup;

  if (validationError.length > 0) {
    return validationError;
  }

  return assistiveText;
};

const renderControlGroupAssistive = propsFromControlGroup => {
  const {
    assistiveText,
    assistiveTextProps,
    controlId: id,
    validationError: error
  } = propsFromControlGroup;

  if (!assistiveText && !error) {
    return null;
  }

  if (assistiveText && !error) {
    return /*#__PURE__*/_react.default.createElement(_utils.AssistiveText, (0, _extends2.default)({
      id: `${id}Help`
    }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
  }

  return /*#__PURE__*/_react.default.createElement(_utils.AssistiveText, (0, _extends2.default)({
    color: "brandDanger",
    id: `${id}Error`
  }, assistiveTextProps), renderAssistiveContent(propsFromControlGroup));
};

const propsToTrim = ['activeColor', 'assistiveText', 'assistiveTextProps', 'controlGroupProps', 'controlId', 'controlLabelProps', 'disabled', 'hideLabel', 'labelText', 'name', 'validationError', ...(0, _keys.default)(_styledHelpers.spaceProps.propTypes), ...(0, _keys.default)(_styledHelpers.typography.propTypes)];

const ControlGroupComponent = ({
  children,
  ...props
}) => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg: bgColorFromProps,
    controlId,
    controlLabelProps,
    disabled,
    hideLabel,
    labelText,
    name,
    validationError
  } = props;
  const nextControlId = controlId || name;
  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
    controlId: nextControlId,
    controlLabelProps,
    disabled,
    hideLabel,
    text: labelText,
    validationError
  };
  const assistiveProps = {
    assistiveText,
    assistiveTextProps,
    controlId: nextControlId,
    validationError
  };
  return /*#__PURE__*/_react.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), children, renderControlGroupLabel(labelProps), renderControlGroupAssistive(assistiveProps));
};

exports.ControlGroupComponent = ControlGroupComponent;
ControlGroupComponent.propTypes = { ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes,
  activeColor: _propTypes.default.string,
  assistiveText: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  bg: _propTypes.default.string,
  children: _propTypes.default.any.isRequired,
  controlId: _propTypes.default.string,
  controlLabelProps: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  hideLabel: _propTypes.default.bool,
  labelText: _propTypes.default.string,
  name: _propTypes.default.string,
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
ControlGroupComponent.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  hideLabel: false,
  labelText: '',
  name: '',
  validationError: ''
};