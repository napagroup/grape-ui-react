"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxFieldComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactCheckboxGroup = require("react-checkbox-group");

var _utils = require("../../../elements/forms/utils");

var _globalStyles = require("../../../global-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  align-items: baseline;\n  align-self: flex-start;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gutter = _getGlobalStyles.grid.gutter;

var opacity = function opacity(props) {
  return "".concat(props.disabled ? 'opacity: 0.6;' : '');
};

var marginRight = function marginRight() {
  return "margin-right: ".concat((0, _styledHelpers.scaleFont)(gutter, 1), ";");
};

var CheckboxLabelComponent = function CheckboxLabelComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var propsToTrim = _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes));

  var labelProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    _react["default"].createElement("label", labelProps, children)
  );
};

CheckboxLabelComponent.propTypes = {
  children: _propTypes["default"].any
};
CheckboxLabelComponent.defaultProps = {
  children: null
};
var CheckboxLabel = (0, _styledComponents["default"])(CheckboxLabelComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, marginRight, opacity);

var Wrapper = function Wrapper(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  var propsToTrim = ['controlGroupProps', 'controlLabelProps', 'flexDirection'].concat(_toConsumableArray(Object.keys(_styledHelpers.spaceProps.propTypes)));
  var checkboxGroupProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  return /*#__PURE__*/_react["default"].createElement(_reactCheckboxGroup.CheckboxGroup, checkboxGroupProps, children);
};

Wrapper.propTypes = {
  children: _propTypes["default"].any
};
Wrapper.defaultProps = {
  children: null
};
var CheckboxGroupWrapper = (0, _styledComponents["default"])(Wrapper)(_templateObject2(), _styledSystem.space, _styledSystem.flexDirection);
CheckboxGroupWrapper.propTypes = _objectSpread({}, _styledSystem.flexDirection.propTypes, {}, _styledHelpers.spaceProps.propTypes);
CheckboxGroupWrapper.defaultProps = {
  pb: 2,
  px: 3
};
var propsToTrimLabel = ['controlId', 'controlLabelProps', 'plainText', 'name', 'onChange', 'option'];
var propsToTrimControl = [].concat(propsToTrimLabel, _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var SingleCheckBox = function SingleCheckBox(props) {
  var disabled = props.disabled,
      option = props.option;
  var propsForCheckboxLabel = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimLabel);
  var propsForCheckboxControl = (0, _componentHelpers.removeSomeProps)((0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, props), propsToTrimControl);
  var stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: (0, _styledHelpers.scaleFont)(gutter, 0.5)
  };
  return /*#__PURE__*/_react["default"].createElement(CheckboxLabel, _extends({
    key: "".concat(option.label, "-label")
  }, propsForCheckboxLabel), /*#__PURE__*/_react["default"].createElement(_reactCheckboxGroup.Checkbox, _extends({
    key: option.label,
    disabled: disabled,
    id: option.value
  }, propsForCheckboxControl, {
    style: stylePropsForCheckBox,
    value: option.value
  })), option.label);
};

SingleCheckBox.propTypes = _objectSpread({
  disabled: _propTypes["default"].bool,
  option: _propTypes["default"].any.isRequired
}, _styledHelpers.typography.propTypes);
SingleCheckBox.defaultProps = {
  disabled: false
};

var CheckboxFieldComponent = function CheckboxFieldComponent(props) {
  var controlId = props.controlId,
      direction = props.flexDirection,
      name = props.name,
      onChange = props.onChange,
      options = props.options,
      plainText = props.plainText,
      value = props.value,
      wrapperProps = props.wrapperProps;
  var propsToTrim = ['controlGroupProps', 'controlId', 'controlLabelProps', 'flexDirection', 'labelText', 'name', 'onChange', 'options', 'plainText', 'wrapperProps'];

  if (plainText) {
    var plainTextProps = _objectSpread({
      value: value
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim));

    return /*#__PURE__*/_react["default"].createElement(_utils.PlainText, plainTextProps);
  }

  var checkboxProps = (0, _componentHelpers.removeSomeProps)(props, propsToTrim);
  var optionsList = options.map(function (option) {
    return SingleCheckBox(_objectSpread({}, checkboxProps, {
      option: option
    }));
  });
  return /*#__PURE__*/_react["default"].createElement(CheckboxGroupWrapper, _extends({
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
  controlId: _propTypes["default"].string,
  flexDirection: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  options: _propTypes["default"].any.isRequired,
  plainText: _propTypes["default"].bool,
  value: _propTypes["default"].any
}, _styledHelpers.typography.propTypes);
CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};