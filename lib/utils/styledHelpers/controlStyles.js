"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.controlStyles = exports.getFinalFieldPadding = exports.disabledStyle = exports.focusStyles = exports.controlColor = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _parseInt = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/parse-int"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _globalStyles = require("../../global-styles");

var _constants = require("../../elements/forms/DateField/constants");

var _utils = require("./utils");

var _cssDefaults = require("./cssDefaults");

var _core = require("./core");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context29; (0, _forEach.default)(_context29 = ownKeys(Object(source), true)).call(_context29, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context30; (0, _forEach.default)(_context30 = ownKeys(Object(source))).call(_context30, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      borderSchema = _getGlobalStyles.border,
      gridSchema = _getGlobalStyles.grid;

const controlColor = props => {
  const bg = props.bg,
        formStyle = props.formStyle;
  const nextBg = formStyle === 'filled' && !bg ? 'formControlFilledBg' : bg || _cssDefaults.defaultStylesBase.bg;
  return (0, _core.colorCore)(_objectSpread(_objectSpread({}, props), {}, {
    bg: nextBg
  }));
};

exports.controlColor = controlColor;

const focusStyles = props => {
  var _context2, _context3;

  const activeColor = props.activeColor,
        formStyle = props.formStyle;
  const focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor, props) : (0, _utils.resolveColor)(activeColor, props);

  if (formStyle === 'filled') {
    var _context;

    return (0, _concat.default)(_context = "\n      border-bottom: 2px solid ".concat(focusColor, ";\n      margin-bottom: -1px;\n      + label { color: ")).call(_context, focusColor, "; }\n    ");
  }

  return (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = "\n    border-color: ".concat(focusColor, ";\n    box-shadow: 0 0 0 1px ")).call(_context3, focusColor, ";\n    + label { color: ")).call(_context2, focusColor, "; }\n  ");
};

exports.focusStyles = focusStyles;
const disabledStyle = "\n  opacity: 0.3;\n  ~ * { color: rgba(0,0,0,0.3); }\n";
exports.disabledStyle = disabledStyle;

const scaleFactor = props => {
  const sm = props.sm,
        lg = props.lg;
  const _borderSchema$borderR = borderSchema.borderRadius,
        schemaBase = _borderSchema$borderR.base,
        schemaSm = _borderSchema$borderR.sm,
        schemaLg = _borderSchema$borderR.lg;
  let value = schemaBase;

  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  } else {
    value = schemaBase;
  }

  return value;
};

const getFinalFieldPadding = (padding, formStyle, labelText) => {
  var _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18;

  return formStyle === 'filled' && labelText ? (0, _concat.default)(_context4 = (0, _concat.default)(_context5 = (0, _concat.default)(_context6 = (0, _concat.default)(_context7 = (0, _concat.default)(_context8 = (0, _concat.default)(_context9 = (0, _concat.default)(_context10 = (0, _concat.default)(_context11 = (0, _concat.default)(_context12 = (0, _concat.default)(_context13 = (0, _concat.default)(_context14 = "\n    padding: ".concat((0, _parseInt.default)(padding, 10) * 1.5, "rem ")).call(_context14, padding, " ")).call(_context13, (0, _parseInt.default)(padding, 10) / 2, "rem;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -")).call(_context12, (0, _parseInt.default)(padding, 10) * 1.5, "rem -")).call(_context11, padding, " -")).call(_context10, (0, _parseInt.default)(padding, 10) / 2, "rem;\n      padding: ")).call(_context9, (0, _parseInt.default)(padding, 10) * 1.5, "rem ")).call(_context8, padding, " ")).call(_context7, (0, _parseInt.default)(padding, 10) / 2, "rem;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-")).call(_context6, padding, ") translateY(calc(")).call(_context5, (0, _parseInt.default)(padding, 10) / 2, "rem + 2px));\n      }\n    }\n    + label {\n      background: transparent;\n      line-height: 1;\n      top: ")).call(_context4, (0, _parseInt.default)(padding, 10) - 0.2, "rem;\n    }\n  ") : (0, _concat.default)(_context15 = (0, _concat.default)(_context16 = (0, _concat.default)(_context17 = (0, _concat.default)(_context18 = "\n    padding: ".concat(padding, ";\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -")).call(_context18, padding, ";\n      padding: ")).call(_context17, padding, ";\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-")).call(_context16, padding, ") translateY(calc(")).call(_context15, padding, " + 2px));\n      }\n    }\n  ");
};

exports.getFinalFieldPadding = getFinalFieldPadding;

const getFinalStyle = props => {
  var _context19, _context20, _context21, _context22, _context23, _context27, _context28;

  const activeColor = props.activeColor,
        borderColor = props.borderColor,
        formStyle = props.formStyle,
        labelText = props.labelText,
        padding = props.padding,
        placeholderColor = props.placeholderColor;
  const scale = scaleFactor(props);
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const focusStyle = focusStyles(_objectSpread({
    activeColor,
    formStyle
  }, globalOverrides));
  const resolvedBorderColor = (0, _utils.resolveColor)(borderColor, globalOverrides);
  const resolvedPlaceholderColor = (0, _utils.resolveColor)(placeholderColor, globalOverrides);
  const controlSharedStyle = (0, _concat.default)(_context19 = (0, _concat.default)(_context20 = (0, _concat.default)(_context21 = (0, _concat.default)(_context22 = (0, _concat.default)(_context23 = "\n    appearance: none;\n    border-radius: ".concat((0, _utils.resolveBorderRadius)(props), ";\n    outline: 0;\n    width: 100%;\n    box-sizing: border-box;\n    ")).call(_context23, getFinalFieldPadding(padding, formStyle, labelText), "\n    &[disabled] {\n      ")).call(_context22, disabledStyle, "\n    }\n    &:focus, &:focus-within{ ")).call(_context21, focusStyle, " }\n    &::placeholder,\n    input::placeholder {\n      color: ")).call(_context20, resolvedPlaceholderColor, "\n    }\n    ")).call(_context19, _constants.DateFieldControlOverrides, "\n  ");

  if (formStyle === 'filled') {
    var _context24, _context25, _context26;

    return (0, _concat.default)(_context24 = (0, _concat.default)(_context25 = (0, _concat.default)(_context26 = "\n      border: 0;\n      border-bottom: 1px solid ".concat(resolvedBorderColor, ";\n      border-radius: ")).call(_context26, scale, " ")).call(_context25, scale, " 0 0;\n      ")).call(_context24, controlSharedStyle, "\n    ");
  }

  return (0, _concat.default)(_context27 = (0, _concat.default)(_context28 = "\n    border: 1px solid ".concat(resolvedBorderColor, ";\n    border-radius: ")).call(_context28, scale, ";\n    ")).call(_context27, controlSharedStyle, "\n  ");
};

const controlStyles = (props = {}) => {
  let overrides = null;
  overrides = _objectSpread(_objectSpread(_objectSpread({}, _cssDefaults.defaultControlStyles), props), {}, {
    padding: gridSchema[props.gutter] || _cssDefaults.defaultControlStyles.padding
  });
  return getFinalStyle(_objectSpread(_objectSpread({}, props), overrides));
};

exports.controlStyles = controlStyles;