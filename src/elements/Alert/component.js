import React from 'react';
import { Box, Flex } from 'src/elements/grid';
import { Text } from 'src/elements/typography';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  alertDefaultProps,
  alertPropTypes,
} from './utils';

const getActionButton = ({
  alertAction,
  alertActionProps,
}) => {
  if (alertAction) {
    return (
      <Box {...alertActionProps}>
        {alertAction}
      </Box>
    );
  }
  return null;
};

getActionButton.propTypes = {
  ...alertPropTypes,
};

getActionButton.defaultProps = {
  ...alertDefaultProps,
};

const getChildren = ({
  children,
  ...props
}) => {
  if (typeof children === 'string') {
    return (
      <Text {...props}>
        {children}
      </Text>
    );
  }
  return children;
};

getChildren.propTypes = {
  ...alertPropTypes,
};

getChildren.defaultProps = {
  ...alertDefaultProps,
};

export const AlertComponent = ({
  alertAction,
  alertActionProps,
  children,
  color,
  flexContainerProps,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  ...props
}) => {
  const textProps = { color };
  const propsForActionButton = {
    alertAction,
    alertActionProps,
  };
  const propsForChildren = {
    children,
    ...textProps,
  };
  const paddingProps = {
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
  };
  return (
    <Box {...removeSomeProps(props, Object.keys(alertPropTypes))}>
      <Flex
        {...flexContainerProps}
        {...paddingProps}
      >
        {getChildren(propsForChildren)}
        {getActionButton(propsForActionButton)}
      </Flex>
    </Box>
  );
};

AlertComponent.propTypes = {
  ...alertPropTypes,
};

AlertComponent.defaultProps = {
  ...alertDefaultProps,
};
