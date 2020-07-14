"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.alertDefaultProps = exports.alertPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

const alertPropTypes = {
  alertAction: _propTypes.default.node,
  alertActionProps: _propTypes.default.object,
  children: _propTypes.default.any,
  flexContainerProps: _propTypes.default.object
};
exports.alertPropTypes = alertPropTypes;
const alertDefaultProps = {
  alertAction: null,
  alertActionProps: {},
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 4,
  children: '',
  color: 'white',
  display: 'inline-block',
  flexContainerProps: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  p: 3
};
exports.alertDefaultProps = alertDefaultProps;