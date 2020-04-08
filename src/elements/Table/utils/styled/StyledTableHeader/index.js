import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultTableHeaderProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  tableHeaderPropTypes,
} from '../..';

function StyledTableHeaderComponent(props) {
  const { children, ...otherProps } = props;
  return <thead {...removeSomeProps(otherProps, defaultTableStylesPropsToTrim)}>{children}</thead>;
}

StyledTableHeaderComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableHeaderComponent.defaultProps = {
  children: '',
};

const StyledTableHeader = styled(StyledTableHeaderComponent)(defaultTableStylesBase);

StyledTableHeader.propTypes = {
  ...tableHeaderPropTypes,
};

StyledTableHeader.defaultProps = {
  ...defaultTableHeaderProps,
};

export { StyledTableHeader };
