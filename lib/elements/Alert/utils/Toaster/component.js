"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ToasterComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPortal = require("react-portal");

var _reactToastify = require("react-toastify");

var _grid = require("../../../../elements/grid");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _ = require(".");

var _props = require("./props");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const OuterToastContainer = props => {
  const children = props.children,
        toastPortalTarget = props.toastPortalTarget,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["children", "toastPortalTarget"]);

  if (toastPortalTarget) {
    return /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, (0, _extends2.default)({
      node: toastPortalTarget
    }, otherProps), children);
  }

  return /*#__PURE__*/_react.default.createElement(_grid.Box, otherProps, children);
};

OuterToastContainer.propTypes = {
  children: _propTypes.default.any,
  toastPortalTarget: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.instanceOf(Element)])
};
OuterToastContainer.defaultProps = {
  children: '',
  toastPortalTarget: document.body
};

const ToasterComponent = props => {
  const autoClose = props.autoClose,
        closeButton = props.closeButton,
        closeOnClick = props.closeOnClick,
        draggable = props.draggable,
        hideProgressBar = props.hideProgressBar,
        limit = props.limit,
        portalProps = props.portalProps,
        toastContainerProps = props.toastContainerProps,
        toastPortalTarget = props.toastPortalTarget,
        transition = props.transition;

  const baseToastContainerProps = _objectSpread({
    autoClose,
    closeOnClick,
    draggable,
    hideProgressBar,
    limit,
    transition
  }, toastContainerProps);

  const propsToTrim = _objectSpread({}, baseToastContainerProps, {}, _props.toasterPropTypes);

  const outerToastContainerProps = _objectSpread({}, portalProps, {
    toastPortalTarget
  });

  return /*#__PURE__*/_react.default.createElement(OuterToastContainer, outerToastContainerProps, /*#__PURE__*/_react.default.createElement("style", null, _.animationCss), /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, (0, _extends2.default)({
    closeButton: closeButton
  }, baseToastContainerProps))));
};

exports.ToasterComponent = ToasterComponent;
ToasterComponent.propTypes = _objectSpread({}, _props.toasterPropTypes);
ToasterComponent.defaultProps = _objectSpread({}, _props.toasterDefaultProps);