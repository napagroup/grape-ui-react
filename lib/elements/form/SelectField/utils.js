"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleOverridesBase = undefined;

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styleOverridesBase = exports.styleOverridesBase = function styleOverridesBase(_ref) {
  var props = _extends({}, _ref);

  var menuElevation = props.menuElevation,
      menuZIndex = props.menuZIndex,
      styleOverrides = props.styleOverrides;
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var multiValueMargin = 2;
  var styleZIndex = menuZIndex || (0, _styledHelpers.resolveZIndex)(menuElevation, globalOverrides);

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
      }, styleOverrides.clearIndicator);
    },
    control: function control() {
      return _objectSpread({
        border: '0',
        boxShadow: 'none',
        display: 'flex',
        minHeight: '0'
      }, styleOverrides.control);
    },
    dropdownIndicator: function dropdownIndicator(provided) {
      return _objectSpread({}, provided, {
        padding: '0'
      }, styleOverrides.dropdownIndicator);
    },
    indicatorsContainer: function indicatorsContainer(provided) {
      return _objectSpread({}, provided, {
        bottom: '0',
        justifyContent: 'flex-end',
        padding: '0'
      }, styleOverrides.indicatorsContainer);
    },
    indicatorSeparator: function indicatorSeparator() {
      return _objectSpread({
        display: 'none'
      }, styleOverrides.indicatorSeparator);
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
        zIndex: styleZIndex
      }, styleOverrides.menu);
    },
    menuPortal: function menuPortal(provided) {
      return _objectSpread({}, provided, {
        zIndex: styleZIndex
      }, styleOverrides.menuPortal);
    },
    multiValue: function multiValue() {
      return _objectSpread({
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        display: 'flex',
        fontSize: '80%',
        margin: multiValueMargin,
        padding: '4px'
      }, styleOverrides.multiValue);
    },
    multiValueLabel: function multiValueLabel() {
      return _objectSpread({
        padding: '0 4px'
      }, styleOverrides.multiValueLabel);
    },
    multiValueRemove: function multiValueRemove() {
      return _objectSpread({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex'
      }, styleOverrides.multiValueRemove);
    },
    option: function option(styles, _ref3) {
      var isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      return _objectSpread({
        background: resolveBackground({
          isFocused: isFocused,
          isSelected: isSelected
        }),
        color: isFocused || isSelected ? (0, _styledHelpers.resolveColor)('white', globalOverrides) : 'inherit',
        padding: '8px 16px'
      }, styleOverrides.option);
    },
    placeholder: function placeholder() {
      return _objectSpread({
        color: (0, _styledHelpers.resolveColor)(_styledHelpers.defaultControlStyles.placeholderColor, globalOverrides)
      }, styleOverrides.placeholder);
    },
    singleValue: function singleValue() {
      return _objectSpread({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }, styleOverrides.singleValue);
    },
    valueContainer: function valueContainer(provided, _ref4) {
      var hasValue = _ref4.hasValue,
          isMulti = _ref4.isMulti;
      return _objectSpread({}, provided, {
        flex: '1 1 0',
        flexWrap: isMulti ? 'wrap' : 'nowrap',
        margin: hasValue && isMulti ? multiValueMargin * -1.5 : null,
        padding: '0'
      }, styleOverrides.valueContainer);
    }
  };
};