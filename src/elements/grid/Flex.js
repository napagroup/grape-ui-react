import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { passThrough } from 'src/utils/componentHelpers';
import { height, maxHeight, maxWidth, minHeight, minWidth, size, width } from 'styled-system';
import { withBaseStyles, withStyledSystem } from 'src/decorators';

export const Flex = (props, context) => {
  const { theme } = context;
  const overrides = {
    ...props,
    theme,
  };
  const BaseFlex = withBaseStyles(styled.div``, overrides);
  const flexOverrides = {
    ...overrides,
    display: 'flex',
  };
  const ProtoFlex = withStyledSystem(BaseFlex, flexOverrides);
  return <ProtoFlex {...passThrough(Flex, props)} />;
};

Flex.contextTypes = {
  theme: PropTypes.any,
};
Flex.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...width.propTypes,
};

Flex.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
