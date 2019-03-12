import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
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
  contained: false,
  outline: false,
  raised: false,
};
export const ButtonComponent = ({
  children,
  href,
  target,
  to,
  ...props
}) => {
  let output = null;
  if (href) {
    output = (
      <a {...removeSomeProps(props, Object.keys(propsToTrimForLink))} href={href} target={target}>
        {children}
      </a>
    );
  } else if (to) {
    const linkProps = {
      target,
      to,
    };
    output = (
      <ReactRouterLink {...removeSomeProps(props, Object.keys(propsToTrimForLink))} {...linkProps}>
        {children}
      </ReactRouterLink>
    );
  } else {
    output = (
      <button type="button" {...removeSomeProps(props, Object.keys(propsToTrimForButton))}>
        {children}
      </button>
    );
  }
  return output;
};
ButtonComponent.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
};
ButtonComponent.defaultProps = {
  children: null,
  href: null,
  target: '_self',
  to: null,
};
