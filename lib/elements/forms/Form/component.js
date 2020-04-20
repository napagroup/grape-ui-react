import "core-js/modules/es.function.name";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import propTypes from '@styled-system/prop-types';

var formComponentPropsToRemove = _objectSpread({}, propTypes.flexbox, {}, propTypes.layout, {}, propTypes.position, {}, propTypes.space, {
  formInline: false
});

export var applyFormStyleToChild = function applyFormStyleToChild(child, formStyleFromParent) {
  var formStyle = child.props.formStyle;
  var output; // Only TextField will try to apply form style

  if (formStyle || child.type.name !== 'TextField' && child.type.name !== 'SelectField') {
    output = child;
  } else {
    output = React.cloneElement(child, {
      formStyle: formStyleFromParent
    });
  }

  return output;
};
export var FormComponent = function FormComponent(_ref) {
  var children = _ref.children,
      formStyle = _ref.formStyle,
      props = _objectWithoutProperties(_ref, ["children", "formStyle"]);

  var output = null;

  if (!formStyle) {
    output = /*#__PURE__*/React.createElement("form", removeSomeProps(props, _Object$keys(formComponentPropsToRemove)), children);
  } else {
    var _context;

    var childrenWithProps = _mapInstanceProperty(_context = React.Children).call(_context, children, function (child) {
      return applyFormStyleToChild(child, formStyle);
    });

    output = /*#__PURE__*/React.createElement("form", removeSomeProps(props, _Object$keys(formComponentPropsToRemove)), childrenWithProps);
  }

  return output;
};
FormComponent.propTypes = {
  children: PropTypes.any,
  formStyle: PropTypes.string
};
FormComponent.defaultProps = {
  children: null,
  formStyle: ''
};