import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
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
