import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

var _context;

import React from 'react';
import PropTypes from 'prop-types';
import { control, typography, refType } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.us'; // eslint-disable-line no-unused-vars

import TextareaAutosize from 'react-textarea-autosize';
import { cleaveOption, isCleaveInput } from './utils';

var propsToTrim = _concatInstanceProperty(_context = ['formStyle', 'labelText', 'plainText', 'validationError', 'currency', 'email', 'formatterOptions', 'inputRef', 'integer', 'maxRows', 'multiline', 'numeric', 'password', 'phone', 'plainText', 'postalCode']).call(_context, _toConsumableArray(_Object$keys(control.propTypes)), _toConsumableArray(_Object$keys(typography.propTypes)));

var getInputType = function getInputType(props) {
  if (props.password) {
    return 'password';
  }

  if (props.email) {
    return 'email';
  }

  return 'text';
};

var getTabIndex = function getTabIndex(plainText) {
  return plainText ? '-1' : '0';
};

export var TextInputComponent = function TextInputComponent(props) {
  var inputRef = props.inputRef,
      maxRows = props.maxRows,
      multiline = props.multiline,
      plainText = props.plainText,
      otherProps = _objectWithoutProperties(props, ["inputRef", "maxRows", "multiline", "plainText"]);

  if (isCleaveInput(otherProps)) {
    return /*#__PURE__*/React.createElement(Cleave, _extends({
      autoComplete: "no",
      htmlRef: inputRef,
      options: cleaveOption(otherProps),
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, removeSomeProps(otherProps, propsToTrim)));
  }

  if (multiline) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "multiline-scroll-shield"
    }), /*#__PURE__*/React.createElement(TextareaAutosize, _extends({
      inputRef: inputRef,
      maxRows: maxRows,
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, removeSomeProps(otherProps, propsToTrim))));
  }

  return /*#__PURE__*/React.createElement("input", _extends({
    ref: inputRef,
    readOnly: plainText,
    tabIndex: getTabIndex(plainText),
    type: getInputType(otherProps)
  }, removeSomeProps(otherProps, propsToTrim)));
};
TextInputComponent.propTypes = {
  email: PropTypes.bool,
  inputRef: refType,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  plainText: PropTypes.bool
};
TextInputComponent.defaultProps = {
  email: false,
  inputRef: function inputRef() {},
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false
};