import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';
import { spaceProps, typography } from 'src/utils/styledHelpers';
import { emailHrefString } from './utils';

export const LinkComponent = ({
  children, emailHref, to, ...props
}) => {
  const trimmedProps = removeSomeProps(props, Object.keys({ ...spaceProps.propTypes, ...typography.propTypes }));
  const emailLinkHref = emailHrefString(emailHref);
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
  if (emailLinkHref) {
    return (
      <a href={emailLinkHref} {...trimmedProps}>
        {children}
      </a>
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
  emailHref: PropTypes.shape({
    bcc: PropTypes.string,
    body: PropTypes.string,
    cc: PropTypes.string,
    subject: PropTypes.string,
    to: PropTypes.string,
  }),
  to: PropTypes.string,
};

LinkComponent.defaultProps = {
  emailHref: {},
  to: '',
};
