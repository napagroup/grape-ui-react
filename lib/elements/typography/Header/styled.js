"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Header = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

var _componentHelpers = require("../../../utils/componentHelpers");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      fontSizeSchema = _getGlobalStyles.fontSize,
      gridSchema = _getGlobalStyles.grid;

const getHeaderFontSizeFromTag = factoryProps => {
  const factoryPropsTag = factoryProps.tag;
  const tag = factoryPropsTag || 'h1';

  const getHeaderFontSizeMemoized = props => {
    const displayHeader = props.displayHeader;

    const overrides = _objectSpread(_objectSpread({}, props), {}, {
      fontSize: displayHeader ? fontSizeSchema.displayHeader[tag] : fontSizeSchema[tag]
    });

    return (0, _styledHelpers.fontSizeCore)(overrides);
  };

  return getHeaderFontSizeMemoized;
};

const getHeaderFontWeight = props => {
  const displayHeader = props.displayHeader,
        fontWeightFromProps = props.fontWeight;

  const overrides = _objectSpread(_objectSpread({}, props), {}, {
    fontWeight: displayHeader ? '300' : fontWeightFromProps || _styledHelpers.defaultStylesBase.fontWeight
  });

  return (0, _styledSystem.fontWeight)(overrides);
};

const propsToTrim = _objectSpread(_objectSpread(_objectSpread({}, _styledHelpers.spaceProps.propTypes), _styledHelpers.typography.propTypes), {}, {
  children: _propTypes.default.any.isRequired,
  displayHeader: _propTypes.default.bool
});

const headerFactory = factoryProps => {
  const tag = factoryProps.tag;

  const HeaderComponent = (_ref) => {
    let children = _ref.children,
        props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
    return _react.default.createElement(tag, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children);
  }; // This is stated here strictly as a interface reference. Unfortunately as this component is dynamically created there is no propType required or defaultProps enforced.


  HeaderComponent.propTypes = {
    children: _propTypes.default.any.isRequired
  };
  const getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return (0, _styledComponents.default)(HeaderComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontStyleCore, getHeaderFontSize, getHeaderFontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledSystem.space);
};

const Header = headerFactory({
  tag: 'h1'
});
exports.Header = Header;
Header.h1 = Header;

for (let i = 2; i <= 6; i++) {
  const subHeaderTag = "h".concat(i);
  Header[subHeaderTag] = headerFactory({
    tag: subHeaderTag
  });
  Header[subHeaderTag].propTypes = _objectSpread({
    displayHeader: _propTypes.default.bool
  }, _styledHelpers.typography.propTypes);
  Header[subHeaderTag].defaultProps = _objectSpread(_objectSpread({}, _styledHelpers.defaultStylesBase), {}, {
    displayHeader: false,
    fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
    mb: gridSchema.gutter,
    mt: 0
  });
}

Header.propTypes = _objectSpread(_objectSpread({}, _styledHelpers.typography.propTypes), {}, {
  displayHeader: _propTypes.default.bool
});
Header.defaultProps = _objectSpread(_objectSpread({}, _styledHelpers.defaultStylesBase), {}, {
  displayHeader: false,
  fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
  mb: gridSchema.gutter,
  mt: 0
});
/** @component */