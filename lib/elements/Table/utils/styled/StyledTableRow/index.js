"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableRow = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _ = require("../..");

function StyledTableRowComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("tr", (0, _componentHelpers.removeSomeProps)(otherProps, _.defaultTableStylesPropsToTrim), children);
}

StyledTableRowComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableRowComponent.defaultProps = {
  children: ''
};
const StyledTableRow = (0, _styledComponents.default)(StyledTableRowComponent)(_.defaultTableStylesBase);
exports.StyledTableRow = StyledTableRow;
StyledTableRow.propTypes = { ..._.tableRowPropTypes
};
StyledTableRow.defaultProps = { ..._.defaultTableRowProps
};