"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _ = require("../..");

function StyledTableHeaderComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("thead", (0, _componentHelpers.removeSomeProps)(otherProps, _.defaultTableStylesPropsToTrim), children);
}

StyledTableHeaderComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableHeaderComponent.defaultProps = {
  children: ''
};
const StyledTableHeader = (0, _styledComponents.default)(StyledTableHeaderComponent)(_.defaultTableStylesBase);
exports.StyledTableHeader = StyledTableHeader;
StyledTableHeader.propTypes = { ..._.tableHeaderPropTypes
};
StyledTableHeader.defaultProps = { ..._.defaultTableHeaderProps
};