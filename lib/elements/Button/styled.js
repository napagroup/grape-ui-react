"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Button = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../utils/styledHelpers");

var _grid = require("../../elements/grid");

var _Hideable = require("../../elements/utils/Hideable");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _utils = require("./utils");

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  outline: 0;\n  text-transform: uppercase;\n  &:hover {\n    cursor: pointer;\n    ", ";\n  }\n  &:active {\n    ", ";\n    ", ";\n  }\n  &[disabled] {\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  > ", " {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const borderButton = props => (0, _styledSystem.border)(_objectSpread({}, props, {
  border: props.outline ? props.border : '0'
}));

const boxShadowButtonMemoized = (value = '01') => props => (0, _styledSystem.boxShadow)(_objectSpread({}, props, {
  boxShadow: props.raised ? (0, _styledHelpers.resolveBoxShadow)(value) : ''
}));

const scaleButton = props => {
  const pbProps = props.pb,
        plProps = props.pl,
        prProps = props.pr,
        ptProps = props.pt;
  let pb = pbProps;
  let pl = plProps;
  let pr = prProps;
  let pt = ptProps;
  const sm = props.sm,
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

  const nextProps = _objectSpread({}, props, {
    pb,
    pl,
    pr,
    pt
  });

  return (0, _styledSystem.space)(nextProps);
};

const Button = (0, _styledComponents.default)((0, _Hideable.withHideable)(_component.ButtonComponent))(_templateObject(), (0, _styledSystem.system)({
  boxSizing: true
}), borderButton, _styledHelpers.borderRadiusCore, boxShadowButtonMemoized(), _styledSystem.buttonStyle, _styledHelpers.colorCore, _styledSystem.flexbox, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledSystem.lineHeight, _styledSystem.position, scaleButton, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _utils.hoverColorButton, boxShadowButtonMemoized('02'), _utils.activeColorButton, _grid.Box, _styledHelpers.borderRadiusCore, _styledSystem.display, _styledHelpers.ellipsisCore, _styledSystem.maxWidth, _styledSystem.verticalAlign);
exports.Button = Button;
Button.propTypes = _objectSpread({
  /** Defines the active background color for the control. */
  bgActiveColor: _propTypes.default.string,

  /** Defines the hover background color for the control. */
  bgHoverColor: _propTypes.default.string
}, _styledSystem.boxShadow.propTypes, {
  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Contained Button](https://material.io/components/buttons/#contained-button) for more on this style. */
  contained: _propTypes.default.bool
}, _styledSystem.display.propTypes, {
  /** Define properties for an email.  Fill in props and the control will generate the proper string. */
  emailHref: _propTypes.default.shape({
    /** Sets the BCC line. Can be comma-seperatred list. */
    bcc: _propTypes.default.string,

    /** Sets the Body. */
    body: _propTypes.default.string,

    /** Sets the CC line. Can be comma-seperatred list. */
    cc: _propTypes.default.string,

    /** Sets the Subject Line. */
    subject: _propTypes.default.string,

    /** Sets who to send it to. Can be comma-seperatred list. */
    to: _propTypes.default.string
  })
}, _styledSystem.fontWeight.propTypes, {
  /** Will use an anchor tag instead of a button tag. */
  href: _propTypes.default.string
}, _styledSystem.lineHeight.propTypes, {}, _styledSystem.maxWidth.propTypes, {
  /** Passes props to the `Box` child. */
  innerBoxProps: _propTypes.default.object,

  /** Passes props to the `Flex` child that appears when a `leadingIcon` is provided. */
  innerFlexProps: _propTypes.default.object,

  /** Hides component */
  isHidden: _propTypes.default.bool,

  /** Placeholder spot meant for icons. */
  leadingIcon: _propTypes.default.any,

  /** Passes props to the leading icon's container. */
  leadingIconProps: _propTypes.default.object,

  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Outlined Button](https://material.io/components/buttons/#outlined-button) for more on this style. */
  outline: _propTypes.default.bool
}, _styledSystem.position.propTypes, {
  /** Makes the button a "raised" button.
   * @see See [Material Design/Components/Buttons/Hierarchy and Placement](https://material.io/components/buttons/#hierarchy-placement) for more on this style. */
  raised: _propTypes.default.bool
}, _styledSystem.space.propTypes, {
  /** Will use react-router's Link component. You will still need to wrap this in a Router component. */
  to: _propTypes.default.string
}, _styledHelpers.typography.propTypes, {}, _propTypes2.default.border, {}, _propTypes2.default.flexbox, {}, _propTypes2.default.layout, {}, _propTypes2.default.position);
Button.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  bg: null,
  bgActiveColor: null,
  bgHoverColor: null,
  border: "1px solid ".concat((0, _styledHelpers.resolveColor)('borderColor')),
  borderRadius: '',
  boxSizing: 'border-box',
  color: null,
  contained: false,
  display: 'inline-block',
  emailHref: {},
  href: null,
  innerBoxProps: {},
  innerFlexProps: {},
  isHidden: false,
  leadingIcon: null,
  leadingIconProps: {},
  m: 1,
  maxWidth: '100%',
  outline: false,
  pb: 1,
  pl: 3,
  position: _styledHelpers.POSITION_DEFAULT_VALUE,
  pr: 3,
  progressProps: {
    progressType: 'circular'
  },
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
  verticalAlign: 'top'
});
/** @component */