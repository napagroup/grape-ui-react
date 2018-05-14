import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { resolveColor } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

const linkPrimitiveFactory = (props, css) => {
  const { to, ...otherProps } = props;
  let propsForPrimitive = null;
  let Primitive = null;
  if (to) {
    Primitive = styled(ReactRouterLink)`${css}`;
    propsForPrimitive = props;
  } else {
    Primitive = styled.a`${css}`;
    propsForPrimitive = otherProps;
  }
  return <Primitive {...propsForPrimitive} />;
};

const linkFactory = props => {
  const {
    color, hoverColor, ...otherProps
  } = props;

  const overrides = {
    ...props,
    color: color || 'brandLink',
    hoverColor: hoverColor || 'brandLinkHover',
  };
  const baseStyles = textStylesBase(overrides);
  const css = `
    ${baseStyles}
    &:hover,
    &:active {
      color: ${resolveColor(overrides.hoverColor)};
      text-decoration: none;
    }
  `;
  return linkPrimitiveFactory(otherProps, css);
};

linkFactory.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

linkFactory.defaultProps = {
  color: '',
  hoverColor: '',
};

linkPrimitiveFactory.propTypes = {
  to: PropTypes.string,
};

linkPrimitiveFactory.defaultProps = {
  to: '',
};
const Link = props => linkFactory(props);

export { Link };
