"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../utils/styledHelpers");

var _utils = require("./utils");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  outline: 0;\n  text-transform: uppercase;\n  &:hover {\n    cursor: pointer;\n    ", ";\n  }\n  &:active {\n    ", ";\n    ", ";\n  }\n  &[disabled] {\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderButton = function borderButton(props) {
  return (0, _styledSystem.border)(_objectSpread({}, props, {
    border: props.outline ? props.border : ''
  }));
};

var boxShadowButtonMemoized = function boxShadowButtonMemoized() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '01';
  return function (props) {
    return (0, _styledSystem.boxShadow)(_objectSpread({}, props, {
      boxShadow: props.raised ? (0, _styledHelpers.resolveBoxShadow)(value) : ''
    }));
  };
};

var scaleButton = function scaleButton(props) {
  var pbProps = props.pb,
      plProps = props.pl,
      prProps = props.pr,
      ptProps = props.pt;
  var pb = pbProps;
  var pl = plProps;
  var pr = prProps;
  var pt = ptProps;
  var sm = props.sm,
      lg = props.lg;

  if (lg) {
    pb = 2;
    pl = 4;
    pr = 4;
    pt = 2;
  } else if (sm) {
    pb = 0;
    pl = 2;
    pr = 2;
    pt = 0;
  }

  var nextProps = _objectSpread({}, props, {
    pb: pb,
    pl: pl,
    pr: pr,
    pt: pt
  });

  return (0, _styledSystem.space)(nextProps);
};

var Button = exports.Button = (0, _styledComponents2.default)(_component.ButtonComponent)(_templateObject(), _styledSystem.alignContent, _styledSystem.alignItems, _styledSystem.alignSelf, borderButton, _styledHelpers.borderRadiusCore, _styledSystem.borderWidth, boxShadowButtonMemoized(), _styledSystem.bottom, _styledSystem.buttonStyle, _styledHelpers.colorCore, _styledSystem.display, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flexWrap, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.height, _styledSystem.justifyContent, _styledSystem.left, _styledHelpers.letterSpacingCore, _utils.lineHeightButton, _styledSystem.maxHeight, _styledSystem.maxWidth, _styledSystem.minHeight, _styledSystem.minWidth, _utils.positionButton, _styledSystem.right, scaleButton, _styledSystem.size, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledSystem.top, _styledSystem.width, _styledSystem.zIndex, _utils.hoverColorButton, boxShadowButtonMemoized('02'), _utils.activeColorButton);
Button.propTypes = _objectSpread({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, {
  bgActiveColor: _propTypes2.default.string,
  bgHoverColor: _propTypes2.default.string
}, _styledSystem.border.propTypes, _styledSystem.borderRadius.propTypes, _styledSystem.bottom.propTypes, _styledSystem.boxShadow.propTypes, {
  contained: _propTypes2.default.bool
}, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.height.propTypes, {
  href: _propTypes2.default.string
}, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, {
  outline: _propTypes2.default.bool
}, _styledSystem.position.propTypes, {
  raised: _propTypes2.default.bool
}, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, {
  to: _propTypes2.default.string
}, _styledSystem.top.propTypes, _styledHelpers.typography.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);
Button.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  bg: null,
  bgActiveColor: null,
  bgHoverColor: null,
  border: "1px solid ".concat((0, _styledHelpers.resolveColor)('borderColor')),
  borderRadius: '',
  color: null,
  contained: false,
  display: 'inline-block',
  href: null,
  m: 1,
  outline: false,
  pb: 1,
  pl: 3,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null
});