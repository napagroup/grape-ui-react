import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import propTypes from '@styled-system/prop-types';

const propsToTrim = {
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
};

export const FlexComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);

FlexComponent.propTypes = {
  children: PropTypes.any,
};

FlexComponent.defaultProps = {
  children: null,
};
