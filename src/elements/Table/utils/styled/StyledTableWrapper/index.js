import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Box } from 'src/elements/grid';
import { defaultTableStylesPropsToTrim, defaultTableWrapperProps, tableWrapperPropTypes } from '../..';

const propsToTrim = [
  ...Object.keys(propTypes.border),
  ...defaultTableStylesPropsToTrim,

];

function StyledTableWrapperComponent(props) {
  const { children, ...otherProps } = props;
  return <Box {...removeSomeProps(otherProps, propsToTrim)}>{children}</Box>;
}

StyledTableWrapperComponent.propTypes = {
  children: PropTypes.node,
};

StyledTableWrapperComponent.defaultProps = {
  children: '',
};

const StyledTableWrapper = styled(StyledTableWrapperComponent)(border);

StyledTableWrapper.propTypes = {
  ...tableWrapperPropTypes,
};

StyledTableWrapper.defaultProps = {
  ...defaultTableWrapperProps,
};

export { StyledTableWrapper };
