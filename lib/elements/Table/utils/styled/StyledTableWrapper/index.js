"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("../../../../../elements/grid");

var _ = require("../..");

function StyledTableWrapperComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_grid.Box, otherProps, children);
}

StyledTableWrapperComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableWrapperComponent.defaultProps = {
  children: ''
};
const StyledTableWrapper = (0, _styledComponents.default)(StyledTableWrapperComponent)``;
exports.StyledTableWrapper = StyledTableWrapper;
StyledTableWrapper.propTypes = { ..._.tableWrapperPropTypes
};
StyledTableWrapper.defaultProps = { ..._.defaultTableWrapperProps
};