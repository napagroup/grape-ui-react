import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';
import { spaceProps, typography } from 'src/utils/styledHelpers';

export const LinkComponent = ({
  children, to, ...props
}) => {
  const trimmedProps = removeSomeProps(props, Object.keys({ ...spaceProps.propTypes, ...typography.propTypes }));
  if (to) {
    const linkProps = {
      to,
      ...trimmedProps,
    };
    return (
      <ReactRouterLink {...linkProps}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a {...trimmedProps}>
      {children}
    </a>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
};

LinkComponent.defaultProps = {
  to: '',
};
