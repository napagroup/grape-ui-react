import React from 'react';
import PropTypes from 'prop-types';
import { typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  ...typography.propTypes,
};
export const TextComponent = ({ children, ...props }) => (
  <span {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </span>
);
TextComponent.propTypes = {
  children: PropTypes.any.isRequired,
};
