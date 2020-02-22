"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

var _componentHelpers = require("../../../utils/componentHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var getHeaderFontSizeFromTag = function getHeaderFontSizeFromTag(factoryProps) {
  var factoryPropsTag = factoryProps.tag;
  var tag = factoryPropsTag || 'h1';

  var getHeaderFontSizeMemoized = function getHeaderFontSizeMemoized(props) {
    var displayHeader = props.displayHeader;

    var overrides = _objectSpread({}, props, {
      fontSize: displayHeader ? fontSizeSchema.displayHeader[tag] : fontSizeSchema[tag]
    });

    return (0, _styledHelpers.fontSizeCore)(overrides);
  };

  return getHeaderFontSizeMemoized;
};

var getHeaderFontWeight = function getHeaderFontWeight(props) {
  var displayHeader = props.displayHeader,
      fontWeightFromProps = props.fontWeight;

  var overrides = _objectSpread({}, props, {
    fontWeight: displayHeader ? '300' : fontWeightFromProps || _styledHelpers.defaultStylesBase.fontWeight
  });

  return (0, _styledSystem.fontWeight)(overrides);
};

var propsToTrim = _objectSpread({}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes, {
  children: _propTypes2["default"].any.isRequired,
  displayHeader: _propTypes2["default"].bool
});

var headerFactory = function headerFactory(factoryProps) {
  var tag = factoryProps.tag;

  var HeaderComponent = function HeaderComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return _react2["default"].createElement(tag, (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)), children);
  }; // This is stated here strictly as a interface reference. Unfortunately as this component is dynamically created there is no propType required or defaultProps enforced.


  HeaderComponent.propTypes = {
    children: _propTypes2["default"].any.isRequired
  };
  var getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return (0, _styledComponents2["default"])(HeaderComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontStyleCore, getHeaderFontSize, getHeaderFontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledSystem.space);
};

var Header = headerFactory({
  tag: 'h1'
});
Header.h1 = Header;

for (var _i = 2; _i <= 6; _i++) {
  var subHeaderTag = "h".concat(_i);
  Header[subHeaderTag] = headerFactory({
    tag: subHeaderTag
  });
  Header[subHeaderTag].propTypes = _objectSpread({
    displayHeader: _propTypes2["default"].bool
  }, _styledHelpers.typography.propTypes);
  Header[subHeaderTag].defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
    displayHeader: false,
    fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
    mb: gridSchema.gutter,
    mt: 0
  });
}

Header.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  displayHeader: _propTypes2["default"].bool
});
Header.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  displayHeader: false,
  fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
  mb: gridSchema.gutter,
  mt: 0
});
/** @component */

exports.Header = Header;