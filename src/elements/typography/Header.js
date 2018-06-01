import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase, defaultTextStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { passThrough } from 'src/utils/componentHelpers';


const { fontSize: fontSizeSchema, grid: gridSchema } = getGlobalStyles();

const HeaderFactory = props => {
  const {
    display, tag: propsTag,
  } = props;

  const tag = propsTag || 'h1';
  const overrides = {
    ...props,
    fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    fontWeight: display ? '300' : defaultTextStylesBase.fontWeight,
  };
  const baseStyles = textStylesBase(overrides);
  const Primitive = styled[tag]`
    ${baseStyles}
    margin: 0 0 ${gridSchema.gutter};
  `;
  return <Primitive {...passThrough(HeaderFactory, props)} />;
};

HeaderFactory.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

HeaderFactory.defaultProps = {
  color: defaultTextStylesBase.color,
  display: false,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  tag: 'h1',
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};

const Header = props => HeaderFactory(props);

Header.h1 = Header;
Header.h2 = props => HeaderFactory({ ...props, tag: 'h2' });
Header.h3 = props => HeaderFactory({ ...props, tag: 'h3' });
Header.h4 = props => HeaderFactory({ ...props, tag: 'h4' });
Header.h5 = props => HeaderFactory({ ...props, tag: 'h5' });
Header.h6 = props => HeaderFactory({ ...props, tag: 'h6' });
export { Header };
