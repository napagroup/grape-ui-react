import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
  typography,
} from './textStyles';

const getHoverColor = props => `&:active {
  color: ${resolveColor(props.hoverColor)};
 }`;

const LinkComponent = ({
  children, className, to, ...props
}) => {
  if (to) {
    const linkProps = {
      ...passThrough(LinkComponent, props),
      to,
    };
    return (
      <ReactRouterLink {...linkProps} className={className}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a {...passThrough(LinkComponent, props)} className={className}>
      {children}
    </a>
  );
};

LinkComponent.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  hoverColor: PropTypes.string,
  ...typography.propTypes,
  to: PropTypes.string,
};

LinkComponent.defaultProps = {
  className: '',
  hoverColor: '',
  to: '',
};
const Link = styled(LinkComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  &:hover,
  ${getHoverColor}
  `;

Link.propTypes = {
  ...typography.propTypes,
  hoverColor: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none',
};

Link.Router = Link;
export { Link };
