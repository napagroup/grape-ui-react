import React from 'react';
import PropTypes from 'prop-types';
import { typography } from '../textStyles';
import { passThrough } from 'src/utils/componentHelpers';

export const ParagraphComponent = ({ children, ...props }) => (
  <p {...passThrough(ParagraphComponent, props)}>
    {children}
  </p>
);
ParagraphComponent.propTypes = {
  children: PropTypes.any.isRequired,
  lead: PropTypes.bool,
  ...typography.propTypes,
};

ParagraphComponent.defaultProps = {
  lead: false,
};
