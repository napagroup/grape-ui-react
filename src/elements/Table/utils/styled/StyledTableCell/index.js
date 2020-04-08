import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  colorCore,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import {
  defaultTableCellProps,
  defaultTableHeadProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  tableCellPropTypes,
  tableHeadPropTypes,
} from '../..';

const propsToTrim = [
  ...Object.keys(typography.propTypes),
  ...defaultTableStylesPropsToTrim,
  propTypes.fontWeight,
];

function StyledTableCellComponent(props) {
  const { children, tag, ...otherProps } = props;
  const Tag = tag;
  return <Tag {...removeSomeProps(otherProps, propsToTrim)}>{children}</Tag>;
}

StyledTableCellComponent.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.node,
};

StyledTableCellComponent.defaultProps = {
  children: '',
  tag: 'td',
};

const StyledTableCell = styled(StyledTableCellComponent)`
  ${defaultTableStylesBase}
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${textAlignCore}
  ${textDecorationCore}
  &:hover .sort-icon {
    opacity: 0.3;
  }
`;

StyledTableCell.propTypes = {
  ...tableCellPropTypes,
};

StyledTableCell.defaultProps = {
  ...defaultTableCellProps,
};

function StyledTableHead(props) {
  const { children } = props;
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
}

StyledTableHead.propTypes = {
  ...tableHeadPropTypes,
  children: PropTypes.node,
  tag: PropTypes.node,
};

StyledTableHead.defaultProps = {
  ...defaultTableHeadProps,
  children: '',
  tag: 'th',
};

export { StyledTableCell, StyledTableHead };
