"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.alertToast = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

var _Alert = require("../../../../elements/Alert");

var _componentHelpers = require("../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../utils/styledHelpers");

const alertToast = (alertMessage, props = {}) => () => {
  const autoClose = props.autoClose,
        bodyClassName = props.bodyClassName,
        className = props.className,
        closeButton = props.closeButton,
        closeOnClick = props.closeOnClick,
        containerId = props.containerId,
        delay = props.delay,
        draggable = props.draggable,
        draggablePercent = props.draggablePercent,
        hideProgressBar = props.hideProgressBar,
        onClick = props.onClick,
        onClose = props.onClose,
        onOpen = props.onOpen,
        pauseOnFocusLoss = props.pauseOnFocusLoss,
        pauseOnHover = props.pauseOnHover,
        position = props.position,
        progressClassName = props.progressClassName,
        progressStyle = props.progressStyle,
        render = props.render,
        role = props.role,
        style = props.style,
        transition = props.transition;
  const nativeToastProps = {
    autoClose,
    bodyClassName,
    className,
    closeButton,
    closeOnClick,
    containerId,
    delay,
    draggable,
    draggablePercent,
    hideProgressBar,
    onClick,
    onClose,
    onOpen,
    pauseOnFocusLoss,
    pauseOnHover,
    position,
    progressClassName,
    progressStyle,
    render,
    role,
    style,
    transition
  };
  return (0, _reactToastify.toast)( /*#__PURE__*/_react.default.createElement(_Alert.Alert, (0, _extends2.default)({
    alertActionProps: {
      mr: 2
    },
    boxShadow: (0, _styledHelpers.resolveBoxShadow)('02'),
    progressProps: {
      animationDuration: "".concat(autoClose, "ms"),
      isDeterminate: true,
      loop: false
    },
    showProgress: !hideProgressBar && autoClose > 0
  }, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(nativeToastProps))), alertMessage), {
    nativeToastProps
  });
};

exports.alertToast = alertToast;