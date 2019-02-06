import React from 'react';
import PropTypes from 'prop-types';
import { typography } from '../textStyles';
import { passThrough } from 'src/utils/componentHelpers';

export const TextComponent = ({ children, ...props }) => (
  <span {...passThrough(TextComponent, props)}>
    {children}
  </span>
);
TextComponent.propTypes = {
  children: PropTypes.any.isRequired,
  ...typography.propTypes,
};
