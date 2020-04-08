import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src';

const TabButtonRenderer = ({
  active,
  children,
  name,
  onClick,
}) => (
  <Button
    aria-pressed={active}
    fontFamily="monospace"
    name={name}
    onClick={onClick}
    type="button"
    variant={active ? 'contained-primary' : 'info'}
  >
    {children}
    {' </>'}
  </Button>
);

TabButtonRenderer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

TabButtonRenderer.defaultProps = {
  active: false,
};

export default TabButtonRenderer;
