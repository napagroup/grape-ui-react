import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Box, Flex } from 'src/elements/grid';
import {
  getProgress,
  getProgressDefaultProps,
  getProgressPropTypes,
} from 'src/elements/Progress';
import { emailHrefString } from 'src/elements/typography/Link/utils';
import { Hideable } from 'src/elements/utils';
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
  ...getProgressPropTypes,
  innerBoxProps: PropTypes.object,
  innerFlexProps: PropTypes.object,
  leadingIcon: PropTypes.any,
  leadingIconProps: PropTypes.object,
  variant: PropTypes.string,
};
const propsToTrimForButton = {
  ...propsToTrim,
  ...boxShadow.propTypes,
  ...getProgressDefaultProps,
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

const getChildren = options => {
  const {
    children,
    innerBoxProps,
    innerFlexProps,
    leadingIcon,
    leadingIconProps,
    p,
    pl,
    px,
    showProgress,
  } = options;
  if (leadingIcon || showProgress) {
    return (
      <Flex {...innerFlexProps}>
        <Box pr={pl || px || p} {...leadingIconProps}>
          <Hideable hide={showProgress}>
            {leadingIcon}
          </Hideable>
          {getProgress({ showProgress, ...options })}
        </Box>
        <Box {...innerBoxProps}>{children}</Box>
      </Flex>
    );
  }
  return <Box {...innerBoxProps}>{children}</Box>;
};

export const ButtonComponent = ({
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
        {getChildren(props)}
      </a>
    );
  } else if (to) {
    const linkProps = {
      to,
    };
    output = (
      <ReactRouterLink {...trimmedPropsLink} {...linkProps}>
        {getChildren(props)}
      </ReactRouterLink>
    );
  } else if (emailLinkHref) {
    return (
      <a href={emailLinkHref} {...trimmedPropsLink}>
        {getChildren(props)}
      </a>
    );
  } else {
    output = (
      <button type="button" {...removeSomeProps(props, Object.keys(propsToTrimForButton))}>
        {getChildren(props)}
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
