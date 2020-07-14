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
  if (React.isValidElement(children)) {
    return children;
  }
  return (
    <Text {...props}>
      {children}
    </Text>
  );
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
  return (
    <Box {...removeSomeProps(props, Object.keys(alertPropTypes))}>
      <Flex
        {...flexContainerProps}
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
