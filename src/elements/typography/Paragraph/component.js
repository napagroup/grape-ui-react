import React from 'react';
import PropTypes from 'prop-types';
import { spaceProps, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  lead: '',
  ...spaceProps.propTypes,
  ...typography.propTypes,
};
export const ParagraphComponent = ({ children, ...props }) => (
  <p {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </p>
);
ParagraphComponent.propTypes = {
  children: PropTypes.any.isRequired,
  lead: PropTypes.bool,
};

ParagraphComponent.defaultProps = {
  lead: false,
};
