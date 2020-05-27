"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.grapeUICustomStyle = void 0;

var colors = _interopRequireWildcard(require("../../../../assets/json/colors.json"));

const grapeUICustomStyle = {
  hljs: {
    background: colors.white.base
  },
  'hljs-addition': {
    color: colors.teal.base
  },
  'hljs-attribute': {
    color: colors.orange.light
  },
  'hljs-built_in': {
    color: colors.grape.base
  },
  'hljs-builtin-name': {
    color: colors.grape.base
  },
  'hljs-bullet': {
    color: colors.teal.base
  },
  'hljs-comment': {
    color: colors.gray.dark
  },
  'hljs-deletion': {
    color: colors.orange.base
  },
  'hljs-emphasis': {
    fontStyle: 'italic'
  },
  'hljs-keyword': {
    color: colors.blue.base
  },
  'hljs-link': {
    color: colors.grape.base
  },
  'hljs-literal': {
    color: colors.grape.base
  },
  'hljs-meta': {
    color: colors.grape.base
  },
  'hljs-name': {
    color: colors.purple.base
  },
  'hljs-number': {
    color: colors.grape.base
  },
  'hljs-params': {
    color: colors.grape.base
  },
  'hljs-quote': {
    color: colors.gray.dark
  },
  'hljs-regexp': {
    color: colors.orange.base
  },
  'hljs-section': {
    color: colors.indigo.light
  },
  'hljs-selector-class': {
    color: colors.orange.base
  },
  'hljs-selector-id': {
    color: colors.orange.base
  },
  'hljs-selector-tag': {
    color: colors.blue.base
  },
  'hljs-string': {
    color: colors.teal.base
  },
  'hljs-strong': {
    fontWeight: 'bold'
  },
  'hljs-symbol': {
    color: colors.teal.base
  },
  'hljs-tag': {
    color: colors.teal.base
  },
  'hljs-template-variable': {
    color: colors.orange.base
  },
  'hljs-title': {
    color: colors.indigo.light
  },
  'hljs-type': {
    color: colors.grape.base
  },
  'hljs-variable': {
    color: colors.orange.base
  }
};
exports.grapeUICustomStyle = grapeUICustomStyle;