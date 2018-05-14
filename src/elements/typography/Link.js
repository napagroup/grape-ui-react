import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { Link as ReactRouterLink } from 'react-router-dom';

const { colors: colorsSchema } = getGlobalStyles();

const linkFactory = props => {
  const {
    tag: propsTag, ...otherProps
  } = props;

  const tag = propsTag || 'a';
  const overrides = {
    ...props,
    color: colorsSchema.brandLink,
  };
  const baseStyles = textStylesBase(overrides);
  const Primitive = styled[tag]`
    ${baseStyles}
    &:hover,
    &:active {
      color: ${colorsSchema.brandLinkHover}
      text-decoration: none;
    }
  `;
  return <Primitive {...otherProps} />;
};

linkFactory.propTypes = {
  tag: PropTypes.string,
};

linkFactory.defaultProps = {
  tag: 'a',
};

export { Link };
