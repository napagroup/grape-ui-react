import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";

var _context2;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  align-items: baseline;\n  align-self: flex-start;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexDirection, fontWeight, space } from 'styled-system';
import { colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, scaleFont, spaceProps, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { CheckboxGroup, Checkbox } from 'react-checkbox-group';
import { PlainText } from 'src/elements/forms/utils';
import { getGlobalStyles } from 'src/global-styles';

var _getGlobalStyles = getGlobalStyles(),
    gutter = _getGlobalStyles.grid.gutter;

var opacity = function opacity(props) {
  return "".concat(props.disabled ? 'opacity: 0.6;' : '');
};

var marginRight = function marginRight() {
  return "margin-right: ".concat(scaleFont(gutter, 1), ";");
};

var CheckboxLabelComponent = function CheckboxLabelComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var propsToTrim = _toConsumableArray(_Object$keys(typography.propTypes));

  var labelProps = removeSomeProps(props, propsToTrim);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    React.createElement("label", labelProps, children)
  );
};

CheckboxLabelComponent.propTypes = {
  children: PropTypes.any
};
CheckboxLabelComponent.defaultProps = {
  children: null
};
var CheckboxLabel = styled(CheckboxLabelComponent)(_templateObject(), colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontWeight, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, marginRight, opacity);

var Wrapper = function Wrapper(_ref2) {
  var _context;

  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  var propsToTrim = _concatInstanceProperty(_context = ['controlGroupProps', 'controlLabelProps', 'flexDirection']).call(_context, _toConsumableArray(_Object$keys(spaceProps.propTypes)));

  var checkboxGroupProps = removeSomeProps(props, propsToTrim);
  return /*#__PURE__*/React.createElement(CheckboxGroup, checkboxGroupProps, children);
};

Wrapper.propTypes = {
  children: PropTypes.any
};
Wrapper.defaultProps = {
  children: null
};
var CheckboxGroupWrapper = styled(Wrapper)(_templateObject2(), space, flexDirection);
CheckboxGroupWrapper.propTypes = _objectSpread({}, flexDirection.propTypes, {}, spaceProps.propTypes);
CheckboxGroupWrapper.defaultProps = {
  pb: 2,
  px: 3
};
var propsToTrimLabel = ['controlId', 'controlLabelProps', 'plainText', 'name', 'onChange', 'option'];

var propsToTrimControl = _concatInstanceProperty(_context2 = []).call(_context2, propsToTrimLabel, _toConsumableArray(_Object$keys(typography.propTypes)));

var SingleCheckBox = function SingleCheckBox(props) {
  var disabled = props.disabled,
      option = props.option;
  var propsForCheckboxLabel = removeSomeProps(passThrough(Checkbox, props), propsToTrimLabel);
  var propsForCheckboxControl = removeSomeProps(passThrough(Checkbox, props), propsToTrimControl);
  var stylePropsForCheckBox = {
    cursor: 'pointer',
    marginRight: scaleFont(gutter, 0.5)
  };
  return /*#__PURE__*/React.createElement(CheckboxLabel, _extends({
    key: "".concat(option.label, "-label")
  }, propsForCheckboxLabel), /*#__PURE__*/React.createElement(Checkbox, _extends({
    key: option.label,
    disabled: disabled,
    id: option.value
  }, propsForCheckboxControl, {
    style: stylePropsForCheckBox,
    value: option.value
  })), option.label);
};

SingleCheckBox.propTypes = _objectSpread({
  disabled: PropTypes.bool,
  option: PropTypes.any.isRequired
}, typography.propTypes);
SingleCheckBox.defaultProps = {
  disabled: false
};
export var CheckboxFieldComponent = function CheckboxFieldComponent(props) {
  var controlId = props.controlId,
      direction = props.flexDirection,
      name = props.name,
      onChange = props.onChange,
      options = props.options,
      plainText = props.plainText,
      value = props.value,
      wrapperProps = props.wrapperProps;
  var propsToTrim = ['controlGroupProps', 'controlId', 'controlLabelProps', 'flexDirection', 'labelText', 'name', 'onChange', 'options', 'plainText', 'wrapperProps'];

  if (plainText) {
    var plainTextProps = _objectSpread({
      value: value
    }, removeSomeProps(props, propsToTrim));

    return /*#__PURE__*/React.createElement(PlainText, plainTextProps);
  }

  var checkboxProps = removeSomeProps(props, propsToTrim);

  var optionsList = _mapInstanceProperty(options).call(options, function (option) {
    return SingleCheckBox(_objectSpread({}, checkboxProps, {
      option: option
    }));
  });

  return /*#__PURE__*/React.createElement(CheckboxGroupWrapper, _extends({
    checkboxDepth: 2,
    flexDirection: direction,
    id: controlId,
    name: name,
    onChange: onChange,
    value: value
  }, wrapperProps), optionsList);
};
CheckboxFieldComponent.propTypes = _objectSpread({
  controlId: PropTypes.string,
  flexDirection: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.any.isRequired,
  plainText: PropTypes.bool,
  value: PropTypes.any
}, typography.propTypes);
CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null
};