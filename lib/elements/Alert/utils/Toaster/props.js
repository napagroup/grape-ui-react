"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.toasterDefaultProps = exports.toasterPropTypes = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _styledHelpers = require("./styledHelpers");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)([".Toastify__toast-body {\n    > div {\n      margin: 0;\n    }\n    + button {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      transform: translateY(-50%) translateY(-6px);\n    }\n  }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const toasterPropTypes = {
  autoClose: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  closeButton: _propTypes.default.any,
  closeButtonCss: _propTypes.default.any,
  closeOnClick: _propTypes.default.bool,
  closeToast: _propTypes.default.any,
  draggable: _propTypes.default.bool,
  hideProgressBar: _propTypes.default.bool,
  limit: _propTypes.default.number,
  portalProps: _propTypes.default.object,
  toastContainerProps: _propTypes.default.object,
  toastPlacement: _propTypes.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
  toastPortalTarget: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.instanceOf(Element)]),
  transition: _propTypes.default.any
};
exports.toasterPropTypes = toasterPropTypes;
const toasterDefaultProps = {
  autoClose: 4000,
  boxSizing: 'border-box',
  closeButton: _styledHelpers.ToastCloseButton,
  closeButtonCss: (0, _styledComponents.css)(_templateObject()),
  closeOnClick: true,
  closeToast: () => {},
  draggable: false,
  hideProgressBar: true,
  limit: 1,
  portalProps: {},
  position: 'fixed',
  toastContainerProps: {},
  toastPlacement: 'bottom-center',
  toastPortalTarget: document.body,
  transition: _styledHelpers.Zoom
};
exports.toasterDefaultProps = toasterDefaultProps;