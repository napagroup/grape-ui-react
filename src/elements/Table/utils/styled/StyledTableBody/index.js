import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { getGlobalOverrides } from 'src/global-styles';
import { colorCore, resolveColor } from 'src/utils/styledHelpers';
import {
  defaultTableBodyProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  defaultTableStripedProps,
  defaultTableStripedPropTypes,
  tableBodyPropTypes,
} from '../..';

const propsToTrim = [
  ...defaultTableStylesPropsToTrim,
  'tableStriped',
];
function StyledTableBodyComponent(props) {
  const { children, ...otherProps } = props;
  return <tbody {...removeSomeProps(otherProps, propsToTrim)}>{children}</tbody>;
}

StyledTableBodyComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableBodyComponent.defaultProps = {
  children: '',
};

const trNthChild = props => {
  const nextGlobalOverrides = getGlobalOverrides(props);
  const { tableStriped } = props;
  if (!tableStriped) {
    return null;
  }
  const stripedProps = tableStriped === true ? defaultTableStripedProps : tableStriped;
  const { even, odd } = stripedProps;
  const bgEven = even.bg;
  const bgOdd = odd.bg;
  return {
    'tr:nth-child(even)': {
      'background-color': resolveColor(bgEven, nextGlobalOverrides),
    },
    'tr:nth-child(odd)': {
      'background-color': resolveColor(bgOdd, nextGlobalOverrides),
    },
  };
};

const StyledTableBody = styled(StyledTableBodyComponent)`
  ${defaultTableStylesBase}
  ${colorCore}
  ${trNthChild}
`;

StyledTableBody.propTypes = {
  ...tableBodyPropTypes,
  tableStriped: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape(defaultTableStripedPropTypes),
  ]),
};

StyledTableBody.defaultProps = {
  ...defaultTableBodyProps,
  tableStriped: false,
};

export { StyledTableBody };
