import React from 'react';
import { typography } from 'src/elements/typography/textStyles';
import { passThrough } from 'src/utils/componentHelpers';

export const AssistiveTextComponent = ({ children, ...props }) => (
  <div {...passThrough(AssistiveTextComponent, props)}>
    {children}
  </div>);
AssistiveTextComponent.propTypes = {
  ...typography.propTypes,
};

AssistiveTextComponent.defaultProps = {
  color: 'gray',
};
