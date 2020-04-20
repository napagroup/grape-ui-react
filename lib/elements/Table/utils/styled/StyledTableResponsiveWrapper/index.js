"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableResponsiveWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _grid = require("../../../../../elements/grid");

var _ = require("../..");

function StyledTableResponsiveWrapperComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _componentHelpers.removeSomeProps)(otherProps, _.defaultTableStylesPropsToTrim), children);
}

StyledTableResponsiveWrapperComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableResponsiveWrapperComponent.defaultProps = {
  children: ''
};
const StyledTableResponsiveWrapper = (0, _styledComponents.default)(StyledTableResponsiveWrapperComponent)(_.defaultTableStylesBase);
exports.StyledTableResponsiveWrapper = StyledTableResponsiveWrapper;
StyledTableResponsiveWrapper.propTypes = { ..._.tableResponsiveWrapperPropTypes
};
StyledTableResponsiveWrapper.defaultProps = { ..._.defaultTableResponsiveWrapperProps
};