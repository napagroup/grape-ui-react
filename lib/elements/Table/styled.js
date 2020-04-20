"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Table = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

var _utils = require("./utils");

const Table = (0, _styledComponents.default)(_component.TableComponent)`
  ${_utils.defaultTableStylesBase}
  ${_styledSystem.flexbox}
`;
/** @component */

exports.Table = Table;