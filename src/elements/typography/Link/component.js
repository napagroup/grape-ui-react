import React from 'react';
import PropTypes from 'prop-types';
import { passThrough } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

import { typography } from '../textStyles';

export const LinkComponent = ({
  children, to, ...props
}) => {
  if (to) {
    const linkProps = {
      ...passThrough(LinkComponent, props),
      to,
    };
    return (
      <ReactRouterLink {...linkProps}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a {...passThrough(LinkComponent, props)}>
      {children}
    </a>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.any.isRequired,
  hoverColor: PropTypes.string,
  ...typography.propTypes,
  to: PropTypes.string,
};

LinkComponent.defaultProps = {
  hoverColor: '',
  to: '',
};
