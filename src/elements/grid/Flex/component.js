import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultFlexBoxStylesPropsToTrim } from '../utils';

export const FlexComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, defaultFlexBoxStylesPropsToTrim)}>
    {children}
  </div>
);

FlexComponent.propTypes = {
  children: PropTypes.any,
};

FlexComponent.defaultProps = {
  children: null,
};
