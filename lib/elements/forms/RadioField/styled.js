"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.RadioField = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckboxField = require("../CheckboxField");

const RadioField = props => /*#__PURE__*/_react.default.createElement(_CheckboxField.CheckboxField, props);

exports.RadioField = RadioField;
RadioField.propTypes = {
  type: _propTypes.default.oneOf(['checkbox', 'radio'])
};
RadioField.defaultProps = {
  type: 'radio'
};

const RadioInput = props => /*#__PURE__*/_react.default.createElement(_CheckboxField.CheckboxField.Input, props);

RadioInput.propTypes = {
  type: _propTypes.default.oneOf(['checkbox', 'radio'])
};
RadioInput.defaultProps = {
  type: 'radio'
};
RadioField.Input = RadioInput;
/** @component */