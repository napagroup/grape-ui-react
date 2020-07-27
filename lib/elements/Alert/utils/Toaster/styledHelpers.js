"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ToastCloseButton = exports.Zoom = exports.animationCss = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactToastify = require("react-toastify");

var _Button = require("../../../../elements/Button");

const animationCss = "\n  @keyframes zoomInKeyframes {\n    from {\n      opacity: 0;\n      transform: scale3d(.9, .9, .9);\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes zoomOutKeyframes {\n    from {\n      opacity: 1;\n    }\n\n    50% {\n      transform: scale3d(.9, .9, .9);\n    }\n\n    to {\n      opacity: 0;\n    }\n  }\n\n  .zoomIn { animation-name: zoomInKeyframes; }\n  .zoomOut { animation-name: zoomOutKeyframes; }\n";
exports.animationCss = animationCss;
const Zoom = (0, _reactToastify.cssTransition)({
  duration: [250, 125],
  enter: 'zoomIn',
  exit: 'zoomOut'
});
exports.Zoom = Zoom;

const ToastCloseButton = ({
  closeToast
}) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
  bgActiveColor: "rgba(255,255,255,0.2)",
  bgHoverColor: "rgba(255,255,255,0.1)",
  borderRadius: "50%",
  color: "white",
  m: 1,
  onClick: closeToast,
  p: "initial",
  pb: 0,
  pl: 0,
  pr: 0,
  pt: 0,
  size: 24
}, "\xD7");

exports.ToastCloseButton = ToastCloseButton;
ToastCloseButton.propTypes = {
  closeToast: _propTypes.default.func
};
ToastCloseButton.defaultProps = {
  closeToast: () => {}
};