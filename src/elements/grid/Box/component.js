
import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';


const propsToTrim = {
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};
export const BoxComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);

BoxComponent.propTypes = {
  children: PropTypes.any,
};

BoxComponent.defaultProps = {
  children: null,
};
