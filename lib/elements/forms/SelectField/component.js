import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

var _context;

import React from 'react';
import PropTypes from 'prop-types';
import { control, refType } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { styleOverridesBase } from './utils';

var propsToTrim = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_Object$keys(control.propTypes)), ['chipBg', 'formStyle', 'isCreatable', 'isDisabled', 'isFocused', 'labelText', 'menuSelectedBg', 'menuSelectedColor', 'multiple', 'styleOverrides', 'validationError']);

export var SelectComponent = function SelectComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var inputRef = props.inputRef,
      isAsync = props.isAsync,
      isCreatable = props.isCreatable,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      multiple = props.multiple;
  var styles = styleOverridesBase(props);
  var trimmedProps = removeSomeProps(props, propsToTrim);

  if (isAsync) {
    if (isCreatable) {
      return /*#__PURE__*/React.createElement(AsyncCreatableSelect, _extends({
        ref: inputRef,
        className: "grape-ui-select-container",
        classNamePrefix: "grape-ui-select",
        isDisabled: isDisabled,
        isFocused: isFocused,
        isMulti: multiple,
        styles: styles
      }, trimmedProps, {
        isClearable: true
      }), children);
    }

    return /*#__PURE__*/React.createElement(AsyncSelect, _extends({
      ref: inputRef,
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styles
    }, trimmedProps, {
      isClearable: true
    }), children);
  }

  if (isCreatable) {
    return /*#__PURE__*/React.createElement(Creatable, _extends({
      ref: inputRef,
      className: "grape-ui-select-container",
      classNamePrefix: "grape-ui-select",
      isDisabled: isDisabled,
      isFocused: isFocused,
      isMulti: multiple,
      styles: styles
    }, trimmedProps), children);
  }

  return /*#__PURE__*/React.createElement(Select, _extends({
    ref: inputRef,
    className: "grape-ui-select-container",
    classNamePrefix: "grape-ui-select",
    isDisabled: isDisabled,
    isFocused: isFocused,
    isMulti: multiple,
    styles: styleOverridesBase(props)
  }, trimmedProps), children);
};
SelectComponent.propTypes = {
  children: PropTypes.any,
  inputRef: refType,
  isAsync: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
  styleOverrides: PropTypes.object
};
SelectComponent.defaultProps = {
  children: null,
  inputRef: function inputRef() {},
  isAsync: false,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
  styleOverrides: {}
};