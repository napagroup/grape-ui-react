"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CheckboxFieldComponent = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactCheckboxGroup = require("react-checkbox-group");

var _utils = require("../../../elements/forms/utils");

var _globalStyles = require("../../../global-styles");

const {
  grid: {
    gutter
  }
} = (0, _globalStyles.getGlobalStyles)();

const opacity = props => `${props.disabled ? 'opacity: 0.6;' : ''}`;

const marginRight = () => `margin-right: ${(0, _styledHelpers.scaleFont)(gutter, 1)};`;

const CheckboxLabelComponent = ({
  children,
  ...props
}) => {
  const propsToTrim = [...(0, _keys.default)(_styledHelpers.typography.propTypes)];
  const labelProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    _react.default.createElement("label", labelProps, children)
  );
};

CheckboxLabelComponent.propTypes = {
  children: _propTypes.default.any
};
CheckboxLabelComponent.defaultProps = {
  children: null
};
const CheckboxLabel = (0, _styledComponents.default)(CheckboxLabelComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${marginRight}
  ${opacity}
  align-items: baseline;
  align-self: flex-start;
  cursor: pointer;
`;

const Wrapper = ({
  children,
  ...props
}) => {
  const propsToTrim = ['controlGroupProps', 'controlLabelProps', 'flexDirection', ...(0, _keys.default)(_styledHelpers.spaceProps.propTypes)];
  const checkboxGroupProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  return /*#__PURE__*/_react.default.createElement(_reactCheckboxGroup.CheckboxGroup, checkboxGroupProps, children);
};

Wrapper.propTypes = {
  children: _propTypes.default.any
};
Wrapper.defaultProps = {
  children: null
};
const CheckboxGroupWrapper = (0, _styledComponents.default)(Wrapper)`
  display: flex;
  ${_styledSystem.space}
  ${_styledSystem.flexDirection}
`;
CheckboxGroupWrapper.propTypes = { ..._styledSystem.flexDirection.propTypes,
  ..._styledHelpers.spaceProps.propTypes
};
CheckboxGroupWrapper.defaultProps = {
  pb: 2,
  px: 3
};
const propsToTrimLabel = ['controlId', 'controlLabelProps', 'plainText', 'name', 'onChange', 'option'];
const propsToTrimControl = [...propsToTrimLabel, ...(0, _keys.default)(_styledHelpers.typography.propTypes)];

const SingleCheckBox = props => {
  const {
    disabled,
    option
  } = props;
  const propsForCheckboxLabel = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimLabel);
  const propsForCheckboxControl = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimControl);
  const stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: (0, _styledHelpers.scaleFont)(gutter, 0.5)
  };
  return /*#__PURE__*/_react.default.createElement(CheckboxLabel, (0, _extends2.default)({
    key: `${option.label}-label`
  }, propsForCheckboxLabel), /*#__PURE__*/_react.default.createElement(_reactCheckboxGroup.Checkbox, (0, _extends2.default)({
    key: option.label,
    disabled: disabled,
    id: option.value
  }, propsForCheckboxControl, {
    style: stylePropsForCheckBox,
    value: option.value
  })), option.label);
};

SingleCheckBox.propTypes = {
  disabled: _propTypes.default.bool,
  option: _propTypes.default.any.isRequired,
  ..._styledHelpers.typography.propTypes
};
SingleCheckBox.defaultProps = {
  disabled: false
};

const CheckboxFieldComponent = props => {
  const {
    controlId,
    flexDirection: direction,
    name,
    onChange,
    options,
    plainText,
    value,
    wrapperProps
  } = props;
  const propsToTrim = ['controlGroupProps', 'controlId', 'controlLabelProps', 'flexDirection', 'labelText', 'name', 'onChange', 'options', 'plainText', 'wrapperProps'];

  if (plainText) {
    const plainTextProps = {
      value,
      ...(0, _componentHelpers.removeSomeProps)(props, propsToTrim)
    };
    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const checkboxProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  const optionsList = (0, _map.default)(options).call(options, option => SingleCheckBox({ ...checkboxProps,
    option
  }));
  return /*#__PURE__*/_react.default.createElement(CheckboxGroupWrapper, (0, _extends2.default)({
    checkboxDepth: 2,
    flexDirection: direction,
    id: controlId,
    name: name,
    onChange: onChange,
    value: value
  }, wrapperProps), optionsList);
};

exports.CheckboxFieldComponent = CheckboxFieldComponent;
CheckboxFieldComponent.propTypes = {
  controlId: _propTypes.default.string,
  flexDirection: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  options: _propTypes.default.any.isRequired,
  plainText: _propTypes.default.bool,
  value: _propTypes.default.any,
  ..._styledHelpers.typography.propTypes
};
CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};