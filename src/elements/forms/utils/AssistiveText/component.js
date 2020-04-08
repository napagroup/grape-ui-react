import React from 'react';
import PropTypes from 'prop-types';
import { spaceProps, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  ...spaceProps.propTypes,
  ...typography.propTypes,
};

export const AssistiveTextComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);
AssistiveTextComponent.propTypes = {
  children: PropTypes.any,
};

AssistiveTextComponent.defaultProps = {
  children: null,
};
