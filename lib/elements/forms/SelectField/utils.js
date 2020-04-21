"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.styleOverridesBase = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/assign"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const styleOverridesBase = (_ref) => {
  let props = (0, _assign.default)({}, _ref);
  const menuElevation = props.menuElevation,
        menuZIndex = props.menuZIndex,
        styleOverrides = props.styleOverrides;
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const multiValueMargin = 2;
  const styleZIndex = menuZIndex || (0, _styledHelpers.resolveZIndex)(menuElevation, globalOverrides);

  const resolveBackground = ({
    isFocused,
    isSelected
  }) => {
    let background = 'inherit';

    if (isFocused) {
      background = (0, _styledHelpers.resolveColor)('brandLinkHover', globalOverrides);
    } else if (isSelected) {
      background = (0, _styledHelpers.resolveColor)('brandLink', globalOverrides);
    }

    return background;
  };

  return {
    clearIndicator: provided => _objectSpread({}, provided, {
      padding: '0'
    }, styleOverrides.clearIndicator),
    control: () => _objectSpread({
      border: '0',
      boxShadow: 'none',
      display: 'flex',
      minHeight: '0'
    }, styleOverrides.control),
    dropdownIndicator: provided => _objectSpread({}, provided, {
      padding: '0'
    }, styleOverrides.dropdownIndicator),
    indicatorsContainer: provided => _objectSpread({}, provided, {
      bottom: '0',
      justifyContent: 'flex-end',
      padding: '0'
    }, styleOverrides.indicatorsContainer),
    indicatorSeparator: () => _objectSpread({
      display: 'none'
    }, styleOverrides.indicatorSeparator),
    input: styles => null,
    menu: provided => _objectSpread({}, provided, {
      boxShadow: (0, _styledHelpers.resolveBoxShadow)(menuElevation, globalOverrides),
      left: '0',
      marginBottom: '0',
      marginTop: '2px',
      padding: '8px 0',
      position: 'absolute',
      width: '100%',
      zIndex: styleZIndex
    }, styleOverrides.menu),
    menuPortal: provided => _objectSpread({}, provided, {
      zIndex: styleZIndex
    }, styleOverrides.menuPortal),
    multiValue: () => _objectSpread({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      display: 'flex',
      fontSize: '80%',
      margin: multiValueMargin,
      padding: '4px'
    }, styleOverrides.multiValue),
    multiValueLabel: () => _objectSpread({
      padding: '0 4px'
    }, styleOverrides.multiValueLabel),
    multiValueRemove: () => _objectSpread({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex'
    }, styleOverrides.multiValueRemove),
    option: (styles, {
      isFocused,
      isSelected
    }) => _objectSpread({
      background: resolveBackground({
        isFocused,
        isSelected
      }),
      color: isFocused || isSelected ? (0, _styledHelpers.resolveColor)('white', globalOverrides) : 'inherit',
      padding: '8px 16px'
    }, styleOverrides.option),
    placeholder: () => _objectSpread({
      color: (0, _styledHelpers.resolveColor)(_styledHelpers.defaultControlStyles.placeholderColor, globalOverrides)
    }, styleOverrides.placeholder),
    singleValue: () => _objectSpread({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, styleOverrides.singleValue),
    valueContainer: (provided, {
      hasValue,
      isMulti
    }) => _objectSpread({}, provided, {
      flex: '1 1 0',
      flexWrap: isMulti ? 'wrap' : 'nowrap',
      margin: hasValue && isMulti ? multiValueMargin * -1.5 : null,
      padding: '0'
    }, styleOverrides.valueContainer)
  };
};

exports.styleOverridesBase = styleOverridesBase;