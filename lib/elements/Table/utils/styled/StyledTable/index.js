import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-spacing: 0;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultTableProps, defaultTableStylesBase, defaultTableStylesPropsToTrim, tablePropTypes } from '../..';

function StyledTableComponent(props) {
  var children = props.children,
      otherProps = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React.createElement("table", removeSomeProps(otherProps, defaultTableStylesPropsToTrim), children);
}

StyledTableComponent.propTypes = {
  children: PropTypes.node
};
StyledTableComponent.defaultProps = {
  children: ''
};
var StyledTable = styled(StyledTableComponent)(_templateObject(), defaultTableStylesBase);
StyledTable.propTypes = _objectSpread({}, tablePropTypes);
StyledTable.defaultProps = _objectSpread({}, defaultTableProps);
export { StyledTable };