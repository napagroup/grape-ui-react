import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultTableProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  tablePropTypes,
} from '../..';

function StyledTableComponent(props) {
  const { children, ...otherProps } = props;
  return (
    <table {...removeSomeProps(otherProps, defaultTableStylesPropsToTrim)}>
      {children}
    </table>
  );
}

StyledTableComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableComponent.defaultProps = {
  children: '',
};

const StyledTable = styled(StyledTableComponent)`
  border-spacing: 0;
  ${defaultTableStylesBase}
`;

StyledTable.propTypes = {
  ...tablePropTypes,
};

StyledTable.defaultProps = {
  ...defaultTableProps,
};

export { StyledTable };
