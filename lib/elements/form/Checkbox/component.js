"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxFieldComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactCheckboxGroup = require("react-checkbox-group");

var _PlainText = require("../../../elements/form/PlainText");

var _globalStyles = require("../../../global-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0 ", " ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  align-items: baseline;\n  align-self: flex-start;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gutter = _getGlobalStyles.grid.gutter;

var opacity = function opacity(props) {
  return "".concat(props.disabled ? 'opacity: 0.6;' : '');
};

var marginRight = function marginRight() {
  return "margin-right: ".concat((0, _styledHelpers.scaleFont)(gutter, 1));
};

var CheckboxLabel = _styledComponents2["default"].label(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, marginRight, opacity);

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var checkboxGroupProps = (0, _componentHelpers.removeSomeProps)(props, ['flexDirection']);
  return _react2["default"].createElement(_reactCheckboxGroup.CheckboxGroup, checkboxGroupProps, children);
};

Wrapper.propTypes = {
  children: _propTypes2["default"].any
};
Wrapper.defaultProps = {
  children: null
};
var CheckboxGroupWrapper = (0, _styledComponents2["default"])(Wrapper)(_templateObject2(), (0, _styledHelpers.scaleFont)(gutter, 1), (0, _styledHelpers.scaleFont)(gutter, 0.5), _styledSystem.flexDirection);
CheckboxGroupWrapper.propTypes = _objectSpread({}, _styledSystem.flexDirection.propTypes);

var SingleCheckBox = function SingleCheckBox(props) {
  var disabled = props.disabled,
      option = props.option;
  var propsForChildren = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), ['controlId', 'plainText', 'name', 'onChange', 'option']);
  var stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: (0, _styledHelpers.scaleFont)(gutter, 0.5)
  };
  return _react2["default"].createElement(CheckboxLabel, _extends({
    key: "".concat(option.label, "-label")
  }, propsForChildren), _react2["default"].createElement(_reactCheckboxGroup.Checkbox, _extends({
    key: option.label,
    disabled: disabled,
    id: option.value
  }, propsForChildren, {
    style: stylePropsForCheckBox,
    value: option.value
  })), option.label);
};

SingleCheckBox.propTypes = {
  disabled: _propTypes2["default"].bool,
  option: _propTypes2["default"].any.isRequired
};
SingleCheckBox.defaultProps = {
  disabled: false
};

var CheckboxFieldComponent = exports.CheckboxFieldComponent = function CheckboxFieldComponent(props) {
  var controlId = props.controlId,
      direction = props.flexDirection,
      name = props.name,
      onChange = props.onChange,
      options = props.options,
      plainText = props.plainText,
      value = props.value;

  if (plainText) {
    var plainTextProps = _objectSpread({
      value: value
    }, (0, _componentHelpers.removeSomeProps)(props, ['controlId', 'flexDirection', 'labelText', 'name', 'onChange', 'options', 'plainText']));

    return _react2["default"].createElement(_PlainText.PlainText, plainTextProps);
  }

  var checkboxProps = (0, _componentHelpers.removeSomeProps)(props, ['controlId', 'plainText', 'name', 'onChange', 'options', 'flexDirection']);
  var optionsList = options.map(function (option) {
    return SingleCheckBox(_objectSpread({}, checkboxProps, {
      option: option
    }));
  });
  return _react2["default"].createElement(CheckboxGroupWrapper, {
    checkboxDepth: 2,
    flexDirection: direction,
    id: controlId,
    name: name,
    onChange: onChange,
    value: value
  }, optionsList);
};

CheckboxFieldComponent.propTypes = {
  controlId: _propTypes2["default"].string,
  flexDirection: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].array]),
  name: _propTypes2["default"].string,
  onChange: _propTypes2["default"].func,
  options: _propTypes2["default"].any.isRequired,
  plainText: _propTypes2["default"].bool,
  value: _propTypes2["default"].any
};
CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};