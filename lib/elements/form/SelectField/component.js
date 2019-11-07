"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _globalStyles = require("../../../global-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styleOverrides = function styleOverrides(_ref) {
  var props = _extends({}, _ref);

  var menuElevation = props.menuElevation;
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  var resolveBackground = function resolveBackground(_ref2) {
    var isFocused = _ref2.isFocused,
        isSelected = _ref2.isSelected;
    var background = 'inherit';

    if (isFocused) {
      background = (0, _styledHelpers.resolveColor)('brandLinkHover', globalOverrides);
    } else if (isSelected) {
      background = (0, _styledHelpers.resolveColor)('brandLink', globalOverrides);
    }

    return background;
  };

  return {
    clearIndicator: function clearIndicator(provided) {
      return _objectSpread({}, provided, {
        padding: '0'
      });
    },
    control: function control() {
      return {
        border: '0',
        boxShadow: 'none',
        display: 'flex',
        minHeight: '0'
      };
    },
    dropdownIndicator: function dropdownIndicator(provided) {
      return _objectSpread({}, provided, {
        padding: '0'
      });
    },
    indicatorsContainer: function indicatorsContainer(provided) {
      return _objectSpread({}, provided, {
        bottom: '0',
        justifyContent: 'flex-end',
        padding: '0'
      });
    },
    indicatorSeparator: function indicatorSeparator() {
      return {
        display: 'none'
      };
    },
    input: function input(styles) {
      return null;
    },
    menu: function menu(provided) {
      return _objectSpread({}, provided, {
        boxShadow: (0, _styledHelpers.resolveBoxShadow)(menuElevation, globalOverrides),
        left: '0',
        marginBottom: '0',
        marginTop: '2px',
        padding: '8px 0',
        position: 'absolute',
        width: '100%',
        zIndex: (0, _styledHelpers.resolveZIndex)(menuElevation, globalOverrides)
      });
    },
    multiValue: function multiValue() {
      return {
        backgroundColor: (0, _styledHelpers.resolveColor)('white.dark', globalOverrides),
        borderRadius: '4px',
        display: 'flex',
        fontSize: '80%',
        margin: '4px',
        padding: '4px'
      };
    },
    multiValueLabel: function multiValueLabel() {
      return {
        padding: '0 4px'
      };
    },
    multiValueRemove: function multiValueRemove() {
      return {
        cursor: 'pointer'
      };
    },
    option: function option(styles, _ref3) {
      var isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      return {
        background: resolveBackground({
          isFocused: isFocused,
          isSelected: isSelected
        }),
        color: isFocused || isSelected ? (0, _styledHelpers.resolveColor)('white', globalOverrides) : 'inherit',
        fontFamily: (0, _styledHelpers.resolveFontFamily)(_styledHelpers.CSS_DEFAULT_FONT_FAMILY_VALUE),
        padding: '8px 16px'
      };
    },
    placeholder: function placeholder() {
      return {
        color: (0, _styledHelpers.resolveColor)(_styledHelpers.defaultControlStyles.placeholderColor, globalOverrides)
      };
    },
    singleValue: function singleValue() {
      return {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      };
    },
    valueContainer: function valueContainer(provided) {
      return _objectSpread({}, provided, {
        flex: '1 1 0',
        flexWrap: 'nowrap',
        padding: '0'
      });
    }
  };
};

var propsToTrim = [].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), ['chipBg', 'formStyle', 'isCreatable', 'isDisabled', 'isFocused', 'labelText', 'menuSelectedBg', 'menuSelectedColor', 'multiple'], _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)), ['validationError']);

var SelectComponent = exports.SelectComponent = function SelectComponent(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  var isCreatable = props.isCreatable,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      multiple = props.multiple;

  if (isCreatable) {
    return _react2["default"].createElement(_reactSelect.Creatable, _extends({
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styleOverrides(props)
    }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)), children);
  }

  return _react2["default"].createElement(_reactSelect2["default"], _extends({
    className: "grape-ui-select-container",
    classNamePrefix: "grape-ui-select",
    isDisabled: isDisabled,
    isFocused: isFocused,
    isMulti: multiple,
    styles: styleOverrides(props)
  }, (0, _componentHelpers.removeSomeProps)(props, propsToTrim)), children);
};

SelectComponent.propTypes = {
  children: _propTypes2["default"].any,
  isCreatable: _propTypes2["default"].bool,
  isDisabled: _propTypes2["default"].bool,
  isFocused: _propTypes2["default"].bool,
  multiple: _propTypes2["default"].bool
};
SelectComponent.defaultProps = {
  children: null,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false
};