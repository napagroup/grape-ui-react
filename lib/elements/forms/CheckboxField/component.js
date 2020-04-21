"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CheckboxFieldComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactCheckboxGroup = require("react-checkbox-group");

var _utils = require("../../../elements/forms/utils");

var _globalStyles = require("../../../global-styles");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  align-items: baseline;\n  align-self: flex-start;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      gutter = _getGlobalStyles.grid.gutter;

const opacity = props => "".concat(props.disabled ? 'opacity: 0.6;' : '');

const marginRight = () => "margin-right: ".concat((0, _styledHelpers.scaleFont)(gutter, 1), ";");

const CheckboxLabelComponent = (_ref) => {
  let children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
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
const CheckboxLabel = (0, _styledComponents.default)(CheckboxLabelComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, marginRight, opacity);

const Wrapper = (_ref2) => {
  let children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
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
const CheckboxGroupWrapper = (0, _styledComponents.default)(Wrapper)(_templateObject2(), _styledSystem.space, _styledSystem.flexDirection);
CheckboxGroupWrapper.propTypes = _objectSpread({}, _styledSystem.flexDirection.propTypes, {}, _styledHelpers.spaceProps.propTypes);
CheckboxGroupWrapper.defaultProps = {
  pb: 2,
  px: 3
};
const propsToTrimLabel = ['controlId', 'controlLabelProps', 'plainText', 'name', 'onChange', 'option'];
const propsToTrimControl = [...propsToTrimLabel, ...(0, _keys.default)(_styledHelpers.typography.propTypes)];

const SingleCheckBox = props => {
  const disabled = props.disabled,
        option = props.option;
  const propsForCheckboxLabel = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimLabel);
  const propsForCheckboxControl = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimControl);
  const stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: (0, _styledHelpers.scaleFont)(gutter, 0.5)
  };
  return /*#__PURE__*/_react.default.createElement(CheckboxLabel, (0, _extends2.default)({
    key: "".concat(option.label, "-label")
  }, propsForCheckboxLabel), /*#__PURE__*/_react.default.createElement(_reactCheckboxGroup.Checkbox, (0, _extends2.default)({
    key: option.label,
    disabled: disabled,
    id: option.value
  }, propsForCheckboxControl, {
    style: stylePropsForCheckBox,
    value: option.value
  })), option.label);
};

SingleCheckBox.propTypes = _objectSpread({
  disabled: _propTypes.default.bool,
  option: _propTypes.default.any.isRequired
}, _styledHelpers.typography.propTypes);
SingleCheckBox.defaultProps = {
  disabled: false
};

const CheckboxFieldComponent = props => {
  const controlId = props.controlId,
        direction = props.flexDirection,
        name = props.name,
        onChange = props.onChange,
        options = props.options,
        plainText = props.plainText,
        value = props.value,
        wrapperProps = props.wrapperProps;
  const propsToTrim = ['controlGroupProps', 'controlId', 'controlLabelProps', 'flexDirection', 'labelText', 'name', 'onChange', 'options', 'plainText', 'wrapperProps'];

  if (plainText) {
    const plainTextProps = _objectSpread({
      value
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim));

    return /*#__PURE__*/_react.default.createElement(_utils.PlainText, plainTextProps);
  }

  const checkboxProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  const optionsList = (0, _map.default)(options).call(options, option => SingleCheckBox(_objectSpread({}, checkboxProps, {
    option
  })));
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
CheckboxFieldComponent.propTypes = _objectSpread({
  controlId: _propTypes.default.string,
  flexDirection: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  options: _propTypes.default.any.isRequired,
  plainText: _propTypes.default.bool,
  value: _propTypes.default.any
}, _styledHelpers.typography.propTypes);
CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};