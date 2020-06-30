"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.makeColorResolver = void 0;

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

const makeColorResolver = (styleName, propName) => props => ({
  [styleName]: (0, _styledHelpers.resolveColor)(props[propName], (0, _globalStyles.getGlobalOverrides)(props))
});

exports.makeColorResolver = makeColorResolver;