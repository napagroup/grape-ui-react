import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { fontWeight, space } from 'styled-system';
import { colorCore, ellipsisCore, defaultStylesBase, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, scaleFont, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

var _getGlobalStyles = getGlobalStyles(),
    gridSchema = _getGlobalStyles.grid;

var inlineStyle = function inlineStyle(props) {
  var style = "\n    > li {\n      display: inline-block;\n      &:not(:last-child) {\n        margin-right: ".concat(scaleFont(gridSchema.gutter, 0.5), ";\n      }\n    }\n  ");
  return "".concat(props.inline ? style : '');
};

var paddingLeft = function paddingLeft(props) {
  return "padding-left:  ".concat(props.unstyled || props.inline ? '0' : '2.5rem', ";");
};

var listStyle = function listStyle(props) {
  return "".concat(props.unstyled ? '> li { list-style: none; }' : '');
};

var margin = function margin(props) {
  return "margin: 0 0 ".concat(gridSchema.gutter, ";");
};

var listComponentPropsToTrim = _objectSpread({}, propTypes.space, {}, typography.propTypes, {
  inline: PropTypes.bool,
  unstyled: PropTypes.bool
});

var listFactory = function listFactory(factoryProps) {
  var tag = factoryProps.tag;

  var ListComponent = function ListComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return React.createElement(tag, removeSomeProps(props, _Object$keys(listComponentPropsToTrim)), children);
  };

  ListComponent.propTypes = {
    children: PropTypes.any.isRequired
  };
  return styled(ListComponent)(_templateObject(), colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontWeight, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, margin, paddingLeft, listStyle, inlineStyle, space);
};

var List = listFactory({
  tag: 'ul'
});
List.ul = List;
List.ol = listFactory({
  tag: 'ol'
});
List.propTypes = _objectSpread({}, typography.propTypes, {
  inline: PropTypes.bool,
  unstyled: PropTypes.bool
});
List.defaultProps = _objectSpread({}, defaultStylesBase);
/** @component */

export { List };