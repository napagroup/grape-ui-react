"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.AlertComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _grid = require("../../elements/grid");

var _typography = require("../../elements/typography");

var _componentHelpers = require("../../utils/componentHelpers");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const getActionButton = ({
  alertAction,
  alertActionProps
}) => {
  if (alertAction) {
    return /*#__PURE__*/_react.default.createElement(_grid.Box, alertActionProps, alertAction);
  }

  return null;
};

getActionButton.propTypes = _objectSpread({}, _utils.alertPropTypes);
getActionButton.defaultProps = _objectSpread({}, _utils.alertDefaultProps);

const getChildren = (_ref) => {
  let children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  if (_react.default.isValidElement(children)) {
    return children;
  }

  return /*#__PURE__*/_react.default.createElement(_typography.Text, props, children);
};

getChildren.propTypes = _objectSpread({}, _utils.alertPropTypes);
getChildren.defaultProps = _objectSpread({}, _utils.alertDefaultProps);

const AlertComponent = (_ref2) => {
  let alertAction = _ref2.alertAction,
      alertActionProps = _ref2.alertActionProps,
      children = _ref2.children,
      color = _ref2.color,
      flexContainerProps = _ref2.flexContainerProps,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["alertAction", "alertActionProps", "children", "color", "flexContainerProps"]);
  const textProps = {
    color
  };
  const propsForActionButton = {
    alertAction,
    alertActionProps
  };

  const propsForChildren = _objectSpread({
    children
  }, textProps);

  return /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(_utils.alertPropTypes)), /*#__PURE__*/_react.default.createElement(_grid.Flex, flexContainerProps, getChildren(propsForChildren), getActionButton(propsForActionButton)));
};

exports.AlertComponent = AlertComponent;
AlertComponent.propTypes = _objectSpread({}, _utils.alertPropTypes);
AlertComponent.defaultProps = _objectSpread({}, _utils.alertDefaultProps);