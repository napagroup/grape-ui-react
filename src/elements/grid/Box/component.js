
import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultFlexBoxStylesPropsToTrim } from '../utils';

export const BoxComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, defaultFlexBoxStylesPropsToTrim)}>
    {children}
  </div>
);

BoxComponent.propTypes = {
  children: PropTypes.any,
};

BoxComponent.defaultProps = {
  children: null,
};
