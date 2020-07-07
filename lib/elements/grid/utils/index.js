"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.defaultFlexBoxStylesPropsToTrim = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

var _Progress = require("../../../elements/Progress");

const defaultFlexBoxStylesPropsToTrim = [...(0, _keys.default)(_propTypes.default.background), ...(0, _keys.default)(_propTypes.default.border), ...(0, _keys.default)(_propTypes.default.flexbox), ...(0, _keys.default)(_propTypes.default.grid), ...(0, _keys.default)(_propTypes.default.layout), ...(0, _keys.default)(_propTypes.default.position), ...(0, _keys.default)(_propTypes.default.shadow), ...(0, _keys.default)(_propTypes.default.space), ...(0, _keys.default)(_Progress.getProgressPropTypes), 'boxSizing'];
exports.defaultFlexBoxStylesPropsToTrim = defaultFlexBoxStylesPropsToTrim;