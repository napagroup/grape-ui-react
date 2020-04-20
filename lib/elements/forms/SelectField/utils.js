import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Object$assign from "@babel/runtime-corejs3/core-js-stable/object/assign";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { defaultControlStyles, resolveBoxShadow, resolveColor, resolveZIndex } from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';
export var styleOverridesBase = function styleOverridesBase(_ref) {
  var props = _Object$assign({}, _ref);

  var menuElevation = props.menuElevation,
      menuZIndex = props.menuZIndex,
      styleOverrides = props.styleOverrides;
  var globalOverrides = getGlobalOverrides(props);
  var multiValueMargin = 2;
  var styleZIndex = menuZIndex || resolveZIndex(menuElevation, globalOverrides);

  var resolveBackground = function resolveBackground(_ref2) {
    var isFocused = _ref2.isFocused,
        isSelected = _ref2.isSelected;
    var background = 'inherit';

    if (isFocused) {
      background = resolveColor('brandLinkHover', globalOverrides);
    } else if (isSelected) {
      background = resolveColor('brandLink', globalOverrides);
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
        boxShadow: resolveBoxShadow(menuElevation, globalOverrides),
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
        color: isFocused || isSelected ? resolveColor('white', globalOverrides) : 'inherit',
        padding: '8px 16px'
      }, styleOverrides.option);
    },
    placeholder: function placeholder() {
      return _objectSpread({
        color: resolveColor(defaultControlStyles.placeholderColor, globalOverrides)
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