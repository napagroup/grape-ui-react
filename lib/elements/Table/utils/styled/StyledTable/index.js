"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _ = require("../..");

function StyledTableComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("table", (0, _componentHelpers.removeSomeProps)(otherProps, _.defaultTableStylesPropsToTrim), children);
}

StyledTableComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableComponent.defaultProps = {
  children: ''
};
const StyledTable = (0, _styledComponents.default)(StyledTableComponent)`
  border-spacing: 0;
  ${_.defaultTableStylesBase}
`;
exports.StyledTable = StyledTable;
StyledTable.propTypes = { ..._.tablePropTypes
};
StyledTable.defaultProps = { ..._.defaultTableProps
};