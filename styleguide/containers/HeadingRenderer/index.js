import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'src';

const HeadingRenderer = ({
  level,
  children,
  ...props
}) => {
  const HeaderComponent = Header[`h${level}`];
  return (
    <HeaderComponent {...props}>
      {children}
    </HeaderComponent>
  );
};

HeadingRenderer.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

HeadingRenderer.defaultProps = {
  children: '',
};

export default HeadingRenderer;
