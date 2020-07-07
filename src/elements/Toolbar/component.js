import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { toolbarDefaultProps, toolbarPropTypes } from './utils';

const ToolbarInner = styled(Flex)``;

export const ToolbarComponent = ({
  centerArea,
  centerAreaProps,
  children,
  containerComponent,
  leftArea,
  leftAreaProps,
  rightArea,
  rightAreaProps,
  toolbarInnerProps,
  ...props
}) => {
  const {
    progress,
    progressPlacement,
    progressProps,
    showProgress,
  } = props;
  const boxProgressProps = {
    progress,
    progressPlacement,
    progressProps,
    showProgress,
  };
  return (
    <Box {...boxProgressProps}>
      <Box
        as={containerComponent}
        {...removeSomeProps(props, Object.keys(toolbarPropTypes))}
      >
        <ToolbarInner {...toolbarInnerProps}>
          {children}
          <Box {...leftAreaProps}>
            {leftArea}
          </Box>
          <Box {...centerAreaProps}>
            {centerArea}
          </Box>
          <Box {...rightAreaProps}>
            {rightArea}
          </Box>
        </ToolbarInner>
      </Box>
    </Box>
  );
};

ToolbarComponent.propTypes = {
  children: PropTypes.any,
  ...toolbarPropTypes,
};

ToolbarComponent.defaultProps = {
  children: null,
  ...toolbarDefaultProps,
};
