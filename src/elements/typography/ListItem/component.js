import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  ...typography.propTypes,
};
export const ListItemComponent = ({ children, ...props }) => (
  <li {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </li>
);
ListItemComponent.propTypes = {
  children: PropTypes.any.isRequired,
};
