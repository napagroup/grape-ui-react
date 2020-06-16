"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.StyledTableHead = StyledTableHead;
exports.StyledTableCell = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../../utils/styledHelpers");

var _ = require("../..");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover .sort-icon {\n    opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const propsToTrim = [...(0, _keys.default)(_styledHelpers.typography.propTypes), ..._.defaultTableStylesPropsToTrim, _propTypes2.default.fontWeight];

function StyledTableCellComponent(props) {
  const children = props.children,
        tag = props.tag,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["children", "tag"]);
  const Tag = tag;
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim), children);
}

StyledTableCellComponent.propTypes = {
  children: _propTypes.default.node,
  tag: _propTypes.default.node
};
StyledTableCellComponent.defaultProps = {
  children: '',
  tag: 'td'
};
const StyledTableCell = (0, _styledComponents.default)(StyledTableCellComponent)(_templateObject(), _.defaultTableStylesBase, _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
exports.StyledTableCell = StyledTableCell;
StyledTableCell.propTypes = _objectSpread({}, _.tableCellPropTypes);
StyledTableCell.defaultProps = _objectSpread({}, _.defaultTableCellProps);

function StyledTableHead(props) {
  const children = props.children;
  return /*#__PURE__*/_react.default.createElement(StyledTableCell, props, children);
}

StyledTableHead.propTypes = _objectSpread({}, _.tableHeadPropTypes, {
  children: _propTypes.default.node,
  tag: _propTypes.default.node
});
StyledTableHead.defaultProps = _objectSpread({}, _.defaultTableHeadProps, {
  children: '',
  tag: 'th'
});