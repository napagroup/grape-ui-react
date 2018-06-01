import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { resolveColor, passThrough } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

const getLinkInstance = (props, css) => {
  const { to } = props;
  return to ? styled(ReactRouterLink)`${css}` : styled.a`${css}`;
};

const LinkFactory = props => {
  const {
    color, hoverColor, to,
  } = props;

  const overrides = {
    ...props,
    color: color || 'brandLink',
    hoverColor: hoverColor || 'brandLinkHover',
  };
  const baseStyles = textStylesBase(overrides);
  const css = `
    ${baseStyles}
    text-decoration: none;
    &:hover,
    &:active {
      color: ${resolveColor(overrides.hoverColor)};
    }
  `;
  const Primitive = getLinkInstance(props, css);
  const passThroughProps = passThrough(LinkFactory, props);
  if (to) {
    // reintroduce to prop back; attribute is needed for React Router Link
    passThroughProps.to = to;
  }
  return <Primitive {...passThroughProps} />;
};

LinkFactory.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  to: PropTypes.string,
};

LinkFactory.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  to: '',
};

const Link = props => LinkFactory(props);

export { Link };
