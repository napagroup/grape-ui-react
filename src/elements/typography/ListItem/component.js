import React from 'react';
import PropTypes from 'prop-types';
import { typography } from '../textStyles';
import { passThrough } from 'src/utils/componentHelpers';

export const ListItemComponent = ({ children, ...props }) => (
  <li {...passThrough(ListItemComponent, props)}>
    {children}
  </li>
);
ListItemComponent.propTypes = {
  children: PropTypes.any.isRequired,
  ...typography.propTypes,
};
