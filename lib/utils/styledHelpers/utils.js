'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndexForBase = undefined;

var _styledSystem = require('styled-system');

var _globalStyles = require('../../global-styles');

var _objectHelpers = require('../objectHelpers');

var _cssDefaults = require('./cssDefaults');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    zIndexSchema = _getGlobalStyles.zIndex;

var zIndexForBase = exports.zIndexForBase = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'z-index',
  // key for theme values
  key: 'zIndexes',
  // React prop name
  prop: 'zIndex',
  // add a fallback scale object or array, if theme is not present
  scale: [0, 0, 0, 0, 0],
  // accessor function for transforming the value
  transformValue: function transformValue(depth) {
    if (!depth || typeof depth !== 'string') {
      return _cssDefaults.CSS_INHERIT_VALUE;
    }
    var resolvedZIndex = (0, _objectHelpers.resolveToProperty)(depth, zIndexSchema);
    return resolvedZIndex || _cssDefaults.CSS_INHERIT_VALUE;
  }
});