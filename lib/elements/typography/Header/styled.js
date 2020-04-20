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
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import { colorCore, defaultStylesBase, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, spaceProps, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { removeSomeProps } from 'src/utils/componentHelpers';

var _getGlobalStyles = getGlobalStyles(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var getHeaderFontSizeFromTag = function getHeaderFontSizeFromTag(factoryProps) {
  var factoryPropsTag = factoryProps.tag;
  var tag = factoryPropsTag || 'h1';

  var getHeaderFontSizeMemoized = function getHeaderFontSizeMemoized(props) {
    var displayHeader = props.displayHeader;

    var overrides = _objectSpread({}, props, {
      fontSize: displayHeader ? fontSizeSchema.displayHeader[tag] : fontSizeSchema[tag]
    });

    return fontSizeCore(overrides);
  };

  return getHeaderFontSizeMemoized;
};

var getHeaderFontWeight = function getHeaderFontWeight(props) {
  var displayHeader = props.displayHeader,
      fontWeightFromProps = props.fontWeight;

  var overrides = _objectSpread({}, props, {
    fontWeight: displayHeader ? '300' : fontWeightFromProps || defaultStylesBase.fontWeight
  });

  return fontWeight(overrides);
};

var propsToTrim = _objectSpread({}, spaceProps.propTypes, {}, typography.propTypes, {
  children: PropTypes.any.isRequired,
  displayHeader: PropTypes.bool
});

var headerFactory = function headerFactory(factoryProps) {
  var tag = factoryProps.tag;

  var HeaderComponent = function HeaderComponent(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return React.createElement(tag, removeSomeProps(props, _Object$keys(propsToTrim)), children);
  }; // This is stated here strictly as a interface reference. Unfortunately as this component is dynamically created there is no propType required or defaultProps enforced.


  HeaderComponent.propTypes = {
    children: PropTypes.any.isRequired
  };
  var getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return styled(HeaderComponent)(_templateObject(), colorCore, ellipsisCore, fontFamilyCore, fontStyleCore, getHeaderFontSize, getHeaderFontWeight, letterSpacingCore, lineHeightCore, textAlignCore, textDecorationCore, space);
};

var Header = headerFactory({
  tag: 'h1'
});
Header.h1 = Header;

for (var i = 2; i <= 6; i++) {
  var subHeaderTag = "h".concat(i);
  Header[subHeaderTag] = headerFactory({
    tag: subHeaderTag
  });
  Header[subHeaderTag].propTypes = _objectSpread({
    displayHeader: PropTypes.bool
  }, typography.propTypes);
  Header[subHeaderTag].defaultProps = _objectSpread({}, defaultStylesBase, {
    displayHeader: false,
    fontWeight: defaultStylesBase.fontWeight,
    mb: gridSchema.gutter,
    mt: 0
  });
}

Header.propTypes = _objectSpread({}, typography.propTypes, {
  displayHeader: PropTypes.bool
});
Header.defaultProps = _objectSpread({}, defaultStylesBase, {
  displayHeader: false,
  fontWeight: defaultStylesBase.fontWeight,
  mb: gridSchema.gutter,
  mt: 0
});
/** @component */

export { Header };