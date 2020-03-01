import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'src';

const LinkRenderer = ({
  children,
  ...props
}) => (
  <Link {...props}>
    {children}
  </Link>
);

LinkRenderer.propTypes = {
  children: PropTypes.node,
};

LinkRenderer.defaultProps = {
  children: '',
};

export default LinkRenderer;
