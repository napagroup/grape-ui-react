import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultTableRowProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  tableRowPropTypes,
} from '../..';

function StyledTableRowComponent(props) {
  const { children, ...otherProps } = props;
  return <tr {...removeSomeProps(otherProps, defaultTableStylesPropsToTrim)}>{children}</tr>;
}

StyledTableRowComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableRowComponent.defaultProps = {
  children: '',
};

const StyledTableRow = styled(StyledTableRowComponent)(defaultTableStylesBase);

StyledTableRow.propTypes = {
  ...tableRowPropTypes,
};

StyledTableRow.defaultProps = {
  ...defaultTableRowProps,
};

export { StyledTableRow };
