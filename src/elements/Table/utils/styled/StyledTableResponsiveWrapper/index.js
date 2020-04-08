import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Box } from 'src/elements/grid';
import {
  defaultTableResponsiveWrapperProps,
  defaultTableStylesBase,
  defaultTableStylesPropsToTrim,
  tableResponsiveWrapperPropTypes,
} from '../..';

function StyledTableResponsiveWrapperComponent(props) {
  const { children, ...otherProps } = props;
  return <Box {...removeSomeProps(otherProps, defaultTableStylesPropsToTrim)}>{children}</Box>;
}

StyledTableResponsiveWrapperComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableResponsiveWrapperComponent.defaultProps = {
  children: '',
};

const StyledTableResponsiveWrapper = styled(StyledTableResponsiveWrapperComponent)(defaultTableStylesBase);

StyledTableResponsiveWrapper.propTypes = {
  ...tableResponsiveWrapperPropTypes,
};

StyledTableResponsiveWrapper.defaultProps = {
  ...defaultTableResponsiveWrapperProps,
};

export { StyledTableResponsiveWrapper };
