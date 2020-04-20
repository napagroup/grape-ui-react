"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableHead = StyledTableHead;
exports.StyledTableCell = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _styledHelpers = require("../../../../../utils/styledHelpers");

var _ = require("../..");

const propsToTrim = [...(0, _keys.default)(_styledHelpers.typography.propTypes), ..._.defaultTableStylesPropsToTrim, _propTypes2.default.fontWeight];

function StyledTableCellComponent(props) {
  const {
    children,
    tag,
    ...otherProps
  } = props;
  const Tag = tag;
  return /*#__PURE__*/_react.default.createElement(Tag, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim), children);
}

StyledTableCellComponent.propTypes = {
  children: _propTypes.default.node,
  tag: _propTypes.default.node
};
StyledTableCellComponent.defaultProps = {
  children: '',
  tag: 'td'
};
const StyledTableCell = (0, _styledComponents.default)(StyledTableCellComponent)`
  ${_.defaultTableStylesBase}
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  &:hover .sort-icon {
    opacity: 0.3;
  }
`;
exports.StyledTableCell = StyledTableCell;
StyledTableCell.propTypes = { ..._.tableCellPropTypes
};
StyledTableCell.defaultProps = { ..._.defaultTableCellProps
};

function StyledTableHead(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledTableCell, props, children);
}

StyledTableHead.propTypes = { ..._.tableHeadPropTypes,
  children: _propTypes.default.node,
  tag: _propTypes.default.node
};
StyledTableHead.defaultProps = { ..._.defaultTableHeadProps,
  children: '',
  tag: 'th'
};