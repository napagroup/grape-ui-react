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

var _propTypes3 = require("@styled-system/prop-types");

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _utils = require("./utils");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  outline: 0;\n  text-transform: uppercase;\n  &:hover {\n    cursor: pointer;\n    ", ";\n  }\n  &:active {\n    ", ";\n    ", ";\n  }\n  &[disabled] {\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  > div {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderButton = function borderButton(props) {
  return (0, _styledSystem.border)(_objectSpread({}, props, {
    border: props.outline ? props.border : '0'
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

var Button = (0, _styledComponents2["default"])(_component.ButtonComponent)(_templateObject(), borderButton, _styledHelpers.borderRadiusCore, boxShadowButtonMemoized(), _styledSystem.buttonStyle, _styledHelpers.colorCore, _styledSystem.flexbox, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledSystem.lineHeight, _styledSystem.position, scaleButton, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _utils.hoverColorButton, boxShadowButtonMemoized('02'), _utils.activeColorButton, _styledHelpers.borderRadiusCore, _styledSystem.display, _styledHelpers.ellipsisCore, _styledSystem.maxWidth, _styledSystem.verticalAlign);
Button.propTypes = _objectSpread({
  bgActiveColor: _propTypes2["default"].string,
  bgHoverColor: _propTypes2["default"].string
}, _styledSystem.boxShadow.propTypes, {
  contained: _propTypes2["default"].bool
}, _styledSystem.display.propTypes, {}, _styledSystem.fontWeight.propTypes, {
  href: _propTypes2["default"].string
}, _styledSystem.lineHeight.propTypes, {}, _styledSystem.maxWidth.propTypes, {
  outline: _propTypes2["default"].bool
}, _styledSystem.position.propTypes, {
  raised: _propTypes2["default"].bool
}, _styledSystem.space.propTypes, {
  to: _propTypes2["default"].string
}, _styledHelpers.typography.propTypes, {}, _propTypes4["default"].border, {}, _propTypes4["default"].flexbox, {}, _propTypes4["default"].layout, {}, _propTypes4["default"].position);
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
  maxWidth: '100%',
  outline: false,
  pb: 1,
  pl: 3,
  position: _styledHelpers.POSITION_DEFAULT_VALUE,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
  verticalAlign: 'top'
});
/** @component */

exports.Button = Button;