"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.StyledTableBody = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _globalStyles = require("../../../../../global-styles");

var _styledHelpers = require("../../../../../utils/styledHelpers");

var _ = require("../..");

var _context;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propsToTrim = (0, _concat["default"])(_context = []).call(_context, (0, _toConsumableArray2["default"])(_.defaultTableStylesPropsToTrim), ['tableStriped']);

function StyledTableBodyComponent(props) {
  var children = props.children,
      otherProps = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return /*#__PURE__*/_react["default"].createElement("tbody", (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim), children);
}

StyledTableBodyComponent.propTypes = {
  children: _propTypes["default"].node
};
StyledTableBodyComponent.defaultProps = {
  children: ''
};

var trNthChild = function trNthChild(props) {
  var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var tableStriped = props.tableStriped;

  if (!tableStriped) {
    return null;
  }

  var stripedProps = tableStriped === true ? _.defaultTableStripedProps : tableStriped;
  var even = stripedProps.even,
      odd = stripedProps.odd;
  var bgEven = even.bg;
  var bgOdd = odd.bg;
  return {
    'tr:nth-child(even)': {
      'background-color': (0, _styledHelpers.resolveColor)(bgEven, nextGlobalOverrides)
    },
    'tr:nth-child(odd)': {
      'background-color': (0, _styledHelpers.resolveColor)(bgOdd, nextGlobalOverrides)
    }
  };
};

var StyledTableBody = (0, _styledComponents["default"])(StyledTableBodyComponent)(_templateObject(), _.defaultTableStylesBase, _styledHelpers.colorCore, trNthChild);
exports.StyledTableBody = StyledTableBody;
StyledTableBody.propTypes = _objectSpread({}, _.tableBodyPropTypes, {
  tableStriped: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].shape(_.defaultTableStripedPropTypes)])
});
StyledTableBody.defaultProps = _objectSpread({}, _.defaultTableBodyProps, {
  tableStriped: false
});