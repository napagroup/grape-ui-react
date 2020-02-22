"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require("@styled-system/prop-types");

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require("../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

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
    gridSchema = _getGlobalStyles.grid;

var inlineStyle = function inlineStyle(props) {
  var style = "\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ".concat((0, _styledHelpers.scaleFont)(gridSchema.gutter, 0.5), ";\n      }\n    }\n  ");
  return "".concat(props.inline ? style : '');
};

var paddingLeft = function paddingLeft(props) {
  return "padding-left:  ".concat(props.unstyled || props.inline ? '0' : '2.5rem', ";");
};

var listStyle = function listStyle(props) {
  return "".concat(props.unstyled ? '> li { list-style: none; }' : '');
};

var margin = function margin(props) {
  return "margin: 0 0 ".concat(gridSchema.gutter, ";");
};

var listComponentPropsToTrim = _objectSpread({}, _propTypes4["default"].space, {}, _styledHelpers.typography.propTypes, {
  inline: _propTypes2["default"].bool,
  unstyled: _propTypes2["default"].bool
});

var listFactory = function listFactory(factoryProps) {
  var tag = factoryProps.tag;

  var ListComponent = function ListComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return _react2["default"].createElement(tag, (0, _componentHelpers.removeSomeProps)(props, Object.keys(listComponentPropsToTrim)), children);
  };

  ListComponent.propTypes = {
    children: _propTypes2["default"].any.isRequired
  };
  return (0, _styledComponents2["default"])(ListComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, margin, paddingLeft, listStyle, inlineStyle, _styledSystem.space);
};

var List = listFactory({
  tag: 'ul'
});
List.ul = List;
List.ol = listFactory({
  tag: 'ol'
});
List.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  inline: _propTypes2["default"].bool,
  unstyled: _propTypes2["default"].bool
});
List.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase);
/** @component */

exports.List = List;