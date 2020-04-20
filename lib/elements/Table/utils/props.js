"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.tableWrapperPropTypes = exports.tableRowPropTypes = exports.tableResponsiveWrapperPropTypes = exports.tableHeaderPropTypes = exports.tableHeadPropTypes = exports.tableCellPropTypes = exports.tableBodyPropTypes = exports.tablePropTypes = exports.defaultTableStripedPropTypes = exports.defaultTableStylesPropsToTrim = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledHelpers = require("../../../utils/styledHelpers");

const defaultTableStylesPropsToTrim = [...(0, _keys.default)(_propTypes2.default.border), ...(0, _keys.default)(_propTypes2.default.layout), ...(0, _keys.default)(_propTypes2.default.space)];
exports.defaultTableStylesPropsToTrim = defaultTableStylesPropsToTrim;
const defaultTableStylesBasePropTypes = { ..._propTypes2.default.border,
  ..._propTypes2.default.layout,
  ..._propTypes2.default.space
};
const defaultTableStripedPropTypes = {
  even: _propTypes.default.shape({
    bg: _propTypes.default.string
  }),
  odd: _propTypes.default.shape({
    bg: _propTypes.default.string
  })
};
exports.defaultTableStripedPropTypes = defaultTableStripedPropTypes;
const tablePropTypes = { ..._styledHelpers.typography.propTypes,
  ...defaultTableStylesBasePropTypes
};
exports.tablePropTypes = tablePropTypes;
const tableBodyPropTypes = {};
exports.tableBodyPropTypes = tableBodyPropTypes;
const tableCellPropTypes = { ...defaultTableStylesBasePropTypes,
  ..._propTypes2.default.fontWeight
};
exports.tableCellPropTypes = tableCellPropTypes;
const tableHeadPropTypes = { ...defaultTableStylesBasePropTypes,
  ..._propTypes2.default.fontWeight
};
exports.tableHeadPropTypes = tableHeadPropTypes;
const tableHeaderPropTypes = { ...defaultTableStylesBasePropTypes
};
exports.tableHeaderPropTypes = tableHeaderPropTypes;
const tableResponsiveWrapperPropTypes = {};
exports.tableResponsiveWrapperPropTypes = tableResponsiveWrapperPropTypes;
const tableRowPropTypes = { ...defaultTableStylesBasePropTypes
};
exports.tableRowPropTypes = tableRowPropTypes;
const tableWrapperPropTypes = { ..._styledHelpers.typography.propTypes,
  ..._propTypes2.default.border
};
exports.tableWrapperPropTypes = tableWrapperPropTypes;