import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from './textStyles';
import { resolveColor, passThrough } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

const getLinkInstance = (props, css) => {
  const { to } = props;
  return to ? styled(ReactRouterLink)`${css}` : styled.a`${css}`;
};

const LinkFactory = props => {
  const {
    color, hoverColor, textDecoration, to,
  } = props;

  const overrides = {
    ...props,
    color: color || 'brandLink',
    hoverColor: hoverColor || 'brandLinkHover',
    textDecoration: textDecoration || 'none',
  };
  const baseStyles = textStylesBase(overrides);
  const css = `
    ${baseStyles}
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
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  hoverColor: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  to: PropTypes.string,
};

LinkFactory.defaultProps = {
  color: 'brandLink',
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  hoverColor: 'brandLinkHover',
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  tag: 'h1',
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  to: '',
};

const Link = props => LinkFactory(props);

export { Link };
