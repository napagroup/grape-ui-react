"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StyledTableBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _componentHelpers = require("../../../../../utils/componentHelpers");

var _globalStyles = require("../../../../../global-styles");

var _styledHelpers = require("../../../../../utils/styledHelpers");

var _ = require("../..");

const propsToTrim = [..._.defaultTableStylesPropsToTrim, 'tableStriped'];

function StyledTableBodyComponent(props) {
  const {
    children,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement("tbody", (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim), children);
}

StyledTableBodyComponent.propTypes = {
  children: _propTypes.default.node
};
StyledTableBodyComponent.defaultProps = {
  children: ''
};

const trNthChild = props => {
  const nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const {
    tableStriped
  } = props;

  if (!tableStriped) {
    return null;
  }

  const stripedProps = tableStriped === true ? _.defaultTableStripedProps : tableStriped;
  const {
    even,
    odd
  } = stripedProps;
  const bgEven = even.bg;
  const bgOdd = odd.bg;
  return {
    'tr:nth-child(even)': {
      'background-color': (0, _styledHelpers.resolveColor)(bgEven, nextGlobalOverrides)
    },
    'tr:nth-child(odd)': {
      'background-color': (0, _styledHelpers.resolveColor)(bgOdd, nextGlobalOverrides)
    }
  };
};

const StyledTableBody = (0, _styledComponents.default)(StyledTableBodyComponent)`
  ${_.defaultTableStylesBase}
  ${_styledHelpers.colorCore}
  ${trNthChild}
`;
exports.StyledTableBody = StyledTableBody;
StyledTableBody.propTypes = { ..._.tableBodyPropTypes,
  tableStriped: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape(_.defaultTableStripedPropTypes)])
};
StyledTableBody.defaultProps = { ..._.defaultTableBodyProps,
  tableStriped: false
};