import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";

var _context;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover .sort-icon {\n    opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { defaultTableCellProps, defaultTableHeadProps, defaultTableStylesBase, defaultTableStylesPropsToTrim, tableCellPropTypes, tableHeadPropTypes } from '../..';

var propsToTrim = _concatInstanceProperty(_context = []).call(_context, _toConsumableArray(_Object$keys(typography.propTypes)), _toConsumableArray(defaultTableStylesPropsToTrim), [propTypes.fontWeight]);

function StyledTableCellComponent(props) {
  var children = props.children,
      tag = props.tag,
      otherProps = _objectWithoutProperties(props, ["children", "tag"]);

  var Tag = tag;
  return /*#__PURE__*/React.createElement(Tag, removeSomeProps(otherProps, propsToTrim), children);
}

StyledTableCellComponent.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.node
};
StyledTableCellComponent.defaultProps = {
  children: '',
  tag: 'td'
};
var StyledTableCell = styled(StyledTableCellComponent)(_templateObject(), defaultTableStylesBase, colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, fontWeight, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore);
StyledTableCell.propTypes = _objectSpread({}, tableCellPropTypes);
StyledTableCell.defaultProps = _objectSpread({}, defaultTableCellProps);

function StyledTableHead(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(StyledTableCell, props, children);
}

StyledTableHead.propTypes = _objectSpread({}, tableHeadPropTypes, {
  children: PropTypes.node,
  tag: PropTypes.node
});
StyledTableHead.defaultProps = _objectSpread({}, defaultTableHeadProps, {
  children: '',
  tag: 'th'
});
export { StyledTableCell, StyledTableHead };