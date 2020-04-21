"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.PlainText = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _globalStyles = require("../../../../global-styles");

var _component = require("./component");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  > div {\n    ", "\n  }\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      gridSchema = _getGlobalStyles.grid;

const PlainTextStyledComponent = (0, _styledComponents.default)(_component.PlainTextComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledHelpers.ellipsisCore);
PlainTextStyledComponent.propTypes = _objectSpread({}, _styledHelpers.layoutProps.propTypes, {}, _styledSystem.space.propTypes, {}, _styledHelpers.typography.propTypes);
PlainTextStyledComponent.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  width: 1
});

const PlainText = props => {
  const formStyle = props.formStyle,
        pb = props.pb,
        pt = props.pt,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["formStyle", "pb", "pt"]);
  const paddingBottom = formStyle === 'filled' ? '0.5rem' : pb;
  const paddingTop = formStyle === 'filled' ? 'calc(0.7rem + 1px)' : pt;
  return /*#__PURE__*/_react.default.createElement(PlainTextStyledComponent, (0, _extends2.default)({
    pb: paddingBottom,
    pt: paddingTop
  }, otherProps));
};

exports.PlainText = PlainText;
PlainText.propTypes = _objectSpread({}, _styledSystem.space.propTypes);
PlainText.defaultProps = {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding
};
/** @component */