import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from 'src';

const ParaRenderer = ({
  children,
  ...props
}) => (
  <Paragraph {...props}>
    {children}
  </Paragraph>
);

ParaRenderer.propTypes = {
  children: PropTypes.node,
};

ParaRenderer.defaultProps = {
  children: '',
};

export default ParaRenderer;
