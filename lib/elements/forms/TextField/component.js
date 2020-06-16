"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.TextInputComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _react2 = _interopRequireDefault(require("cleave.js/react"));

var _cleavePhone = _interopRequireDefault(require("cleave.js/dist/addons/cleave-phone.us"));

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _utils = require("./utils");

// eslint-disable-line no-unused-vars
const propsToTrim = ['formStyle', 'labelText', 'plainText', 'validationError', 'currency', 'email', 'formatterOptions', 'inputRef', 'integer', 'maxRows', 'multiline', 'numeric', 'password', 'phone', 'plainText', 'postalCode', ...(0, _keys.default)(_styledHelpers.control.propTypes), ...(0, _keys.default)(_styledHelpers.typography.propTypes)];

const getInputType = props => {
  if (props.password) {
    return 'password';
  }

  if (props.email) {
    return 'email';
  }

  return 'text';
};

const getTabIndex = plainText => plainText ? '-1' : '0';

const TextInputComponent = props => {
  const inputRef = props.inputRef,
        maxRows = props.maxRows,
        multiline = props.multiline,
        plainText = props.plainText,
        otherProps = (0, _objectWithoutProperties2.default)(props, ["inputRef", "maxRows", "multiline", "plainText"]);

  if ((0, _utils.isCleaveInput)(otherProps)) {
    return /*#__PURE__*/_react.default.createElement(_react2.default, (0, _extends2.default)({
      autoComplete: "no",
      htmlRef: inputRef,
      options: (0, _utils.cleaveOption)(otherProps),
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim)));
  }

  if (multiline) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "multiline-scroll-shield"
    }), /*#__PURE__*/_react.default.createElement(_reactTextareaAutosize.default, (0, _extends2.default)({
      ref: inputRef,
      maxRows: maxRows,
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim))));
  }

  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputRef,
    readOnly: plainText,
    tabIndex: getTabIndex(plainText),
    type: getInputType(otherProps)
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim)));
};

exports.TextInputComponent = TextInputComponent;
TextInputComponent.propTypes = {
  email: _propTypes.default.bool,
  inputRef: _styledHelpers.refType,
  maxRows: _propTypes.default.number,
  multiline: _propTypes.default.bool,
  password: _propTypes.default.bool,
  plainText: _propTypes.default.bool
};
TextInputComponent.defaultProps = {
  email: false,
  inputRef: () => {},
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false
};