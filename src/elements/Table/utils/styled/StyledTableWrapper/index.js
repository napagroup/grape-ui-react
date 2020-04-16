import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'src/elements/grid';
import {
  defaultTableWrapperProps,
  tableWrapperPropTypes,
} from '../..';

function StyledTableWrapperComponent(props) {
  const { children, ...otherProps } = props;
  return <Box {...otherProps}>{children}</Box>;
}

StyledTableWrapperComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableWrapperComponent.defaultProps = {
  children: '',
};

const StyledTableWrapper = styled(StyledTableWrapperComponent)``;

StyledTableWrapper.propTypes = {
  ...tableWrapperPropTypes,
};

StyledTableWrapper.defaultProps = {
  ...defaultTableWrapperProps,
};

export { StyledTableWrapper };
