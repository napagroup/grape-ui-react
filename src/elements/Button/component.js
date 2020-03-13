import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { emailHrefString } from 'src/elements/typography/Link/utils';
import { boxShadow } from 'styled-system';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  flexboxProps,
  layoutProps,
  positionProps,
  spaceProps,
  typography,
} from 'src/utils/styledHelpers';

const propsToTrim = {
  ...flexboxProps.propTypes,
  ...layoutProps.propTypes,
  ...positionProps.propTypes,
  ...spaceProps.propTypes,
  ...typography.propTypes,
  variant: PropTypes.string,
};
const propsToTrimForButton = {
  ...propsToTrim,
  ...boxShadow.propTypes,
  bgActiveColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  contained: false,
  href: PropTypes.string,
  outline: false,
  raised: false,
  target: PropTypes.string,
  to: PropTypes.string,
};

const propsToTrimForLink = {
  ...propsToTrim,
  ...boxShadow.propTypes,
  bgActiveColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  contained: false,
  outline: false,
  raised: false,
};
export const ButtonComponent = ({
  children,
  emailHref,
  href,
  to,
  ...props
}) => {
  let output = null;
  const trimmedPropsLink = removeSomeProps(props, Object.keys(propsToTrimForLink));
  const emailLinkHref = emailHrefString(emailHref);
  if (href) {
    output = (
      <a href={href} {...trimmedPropsLink}>
        <div>{children}</div>
      </a>
    );
  } else if (to) {
    const linkProps = {
      to,
    };
    output = (
      <ReactRouterLink {...trimmedPropsLink} {...linkProps}>
        <div>{children}</div>
      </ReactRouterLink>
    );
  } else if (emailLinkHref) {
    return (
      <a href={emailLinkHref} {...trimmedPropsLink}>
        <div>{children}</div>
      </a>
    );
  } else {
    output = (
      <button type="button" {...removeSomeProps(props, Object.keys(propsToTrimForButton))}>
        <div>{children}</div>
      </button>
    );
  }
  return output;
};
ButtonComponent.propTypes = {
  children: PropTypes.any,
  emailHref: PropTypes.shape({
    bcc: PropTypes.string,
    body: PropTypes.string,
    cc: PropTypes.string,
    subject: PropTypes.string,
    to: PropTypes.string,
  }),
  href: PropTypes.string,
  to: PropTypes.string,
};
ButtonComponent.defaultProps = {
  children: null,
  emailHref: {},
  href: null,
  to: null,
};
