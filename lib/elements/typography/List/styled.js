"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.List = void 0;

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

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      gridSchema = _getGlobalStyles.grid;

const inlineStyle = props => {
  const style = "\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ".concat((0, _styledHelpers.scaleFont)(gridSchema.gutter, 0.5), ";\n      }\n    }\n  ");
  return "".concat(props.inline ? style : '');
};

const paddingLeft = props => "padding-left:  ".concat(props.unstyled || props.inline ? '0' : '2.5rem', ";");

const listStyle = props => "".concat(props.unstyled ? '> li { list-style: none; }' : '');

const margin = props => "margin: 0 0 ".concat(gridSchema.gutter, ";");

const listComponentPropsToTrim = _objectSpread(_objectSpread(_objectSpread({}, _propTypes2.default.space), _styledHelpers.typography.propTypes), {}, {
  inline: _propTypes.default.bool,
  unstyled: _propTypes.default.bool
});

const listFactory = factoryProps => {
  const tag = factoryProps.tag;

  const ListComponent = (_ref) => {
    let children = _ref.children,
        props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
    return _react.default.createElement(tag, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(listComponentPropsToTrim)), children);
  };

  ListComponent.propTypes = {
    children: _propTypes.default.any.isRequired
  };
  return (0, _styledComponents.default)(ListComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, margin, paddingLeft, listStyle, inlineStyle, _styledSystem.space);
};

const List = listFactory({
  tag: 'ul'
});
exports.List = List;
List.ul = List;
List.ol = listFactory({
  tag: 'ol'
});
List.propTypes = _objectSpread(_objectSpread({}, _styledHelpers.typography.propTypes), {}, {
  inline: _propTypes.default.bool,
  unstyled: _propTypes.default.bool
});
List.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase);
/** @component */