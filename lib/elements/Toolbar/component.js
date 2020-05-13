"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ToolbarComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("../../elements/grid");

var _componentHelpers = require("../../utils/componentHelpers");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const ToolbarInner = (0, _styledComponents.default)(_grid.Flex)(_templateObject());

const ToolbarComponent = (_ref) => {
  let centerArea = _ref.centerArea,
      centerAreaProps = _ref.centerAreaProps,
      children = _ref.children,
      leftArea = _ref.leftArea,
      leftAreaProps = _ref.leftAreaProps,
      rightArea = _ref.rightArea,
      rightAreaProps = _ref.rightAreaProps,
      toolbarInnerProps = _ref.toolbarInnerProps,
      props = (0, _objectWithoutProperties2.default)(_ref, ["centerArea", "centerAreaProps", "children", "leftArea", "leftAreaProps", "rightArea", "rightAreaProps", "toolbarInnerProps"]);
  return /*#__PURE__*/_react.default.createElement("header", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(_utils.toolbarPropTypes)), /*#__PURE__*/_react.default.createElement(ToolbarInner, toolbarInnerProps, children, /*#__PURE__*/_react.default.createElement(_grid.Box, leftAreaProps, leftArea), /*#__PURE__*/_react.default.createElement(_grid.Box, centerAreaProps, centerArea), /*#__PURE__*/_react.default.createElement(_grid.Box, rightAreaProps, rightArea)));
};

exports.ToolbarComponent = ToolbarComponent;
ToolbarComponent.propTypes = _objectSpread({
  children: _propTypes.default.any
}, _utils.toolbarPropTypes);
ToolbarComponent.defaultProps = _objectSpread({
  children: null
}, _utils.toolbarDefaultProps);